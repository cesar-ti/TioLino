import { InvoiceProvider } from './../../providers/invoice/invoice';
import { DetalinvoicePage } from './../detalinvoice/detalinvoice';
import { ListPage } from './../list/list';
import { Component } from '@angular/core';
import { NavController, Platform, IonicPage, LoadingController, ToastController, AlertController  } from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { Api } from '../../providers/api/api';
import { InvoicePage } from '../invoice/invoice';

/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  private barcodeText:String;
  private barcodeFormat:String;
  private platform:Platform;	
  private navController:NavController;  
  private products: any[] = [];
  private invoice: any = this.invoiceProvider.invoice;
  private begin: boolean = false;   
  private finish: boolean = false;
  private msg: string;

  constructor(public navCtrl: NavController, private barcode: BarcodeScanner, private invoiceProvider: InvoiceProvider, 
    platform: Platform, public api: Api, public loadingCtrl: LoadingController, private toast: ToastController,
    public alertCtrl: AlertController) {
    this.platform = platform;
    this.navController = navCtrl;

    delete(this.invoice.nvc_code);      
    delete(this.invoice.iv_valueinvoice);
    delete(this.invoice.iv_valuepaid);
    delete(this.invoice.iv_change);
    delete(this.products);
    this.begin = false;   
    this.finish = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');        
  }

  generateCode(){
    let loading = this.loadingCtrl.create({ spinner: 'dots', content: 'Gerando códgo...' });
    loading.present();   

    delete(this.invoice.nvc_code);      
    delete(this.invoice.iv_valueinvoice);
    delete(this.invoice.iv_valuepaid);
    delete(this.invoice.iv_change);
    delete(this.products);
    this.begin = false;   
    this.finish = false;

    this.invoiceProvider.generateCodeInvoice().subscribe(res => {
      loading.dismiss();
      let invoicecode = res.json()[0];           
      this.invoice.nvc_code = invoicecode[0].nvc_code;
      this.begin = true;
      this.msg = 'Caixa Aberto';      
    }, error => {
      console.log('Erro: '+error);
      loading.dismiss();
      this.presentToast('Erro ao gerar o código');
    }); 
  }
  
  readProduct(){
    console.log('scannig product barcode');
      this.platform.ready().then(() => {
          this.barcode.scan().then((result) => {
            if (!result.cancelled) {
              this.barcodeText = result.text;
              this.barcodeFormat = result.format;
              this.registerProductInvoice({'text':result.text,'format':result.format});}
          }, (error) => {
            console.log('error when scanning product barcode');
          });
      });  		
  }

  registerProductInvoice(data){  
    let loading = this.loadingCtrl.create({ spinner: 'dots', content: 'Registrando produto...' });
    loading.present();
    
    this.invoice.nvc_prd_code = Number(data.text); 

    this.invoiceProvider.registerProductInvoice(this.invoice).subscribe(res => {
      loading.dismiss();

      if (res.json()[0][0].st == 0){        
        this.presentToast('Produto não cadastrado!');
      } else {
        this.getInvoiceById();
      }
      
    }, error => {
      loading.dismiss();
      this.presentToast('Erro ao registrar produto!');
    });
  }

  getInvoiceById(){
    let loading = this.loadingCtrl.create({ spinner: 'dots' });
    loading.present();

    this.invoiceProvider.getInvoiceById(this.invoice.nvc_code).subscribe(res => {          
      loading.dismiss();
      this.products = res.json()[0];
      this.invoice.iv_valueinvoice = res.json()[1][0].valortotal; 
      this.finish = true;  
    }, error => {
      loading.dismiss();
      this.presentToast('Erro ao listar os produtos!');
    });
  }  

  finishInvoice(){ 
    const alert = this.alertCtrl.create({
      title: 'Fechar Venda',
      subTitle: 'Valor Total: '+this.invoice.iv_valueinvoice+'',
      inputs: [         
        { name: 'iv_valuepaid', placeholder: 'Valor a pagar', type: 'text' }
      ],
      buttons: [
      { text: 'Cancelar', role: 'cancel', handler: data => { }},
      { text: 'Fechar Compra', handler: data => { 

        this.invoice.iv_valuepaid = data.iv_valuepaid;

        this.invoiceProvider.finishInvoice(this.invoice).subscribe(res => {  
          this.begin = false;
          this.finish = false;
          this.invoice.iv_change = res.json()[1][0].iv_change;
          this.showIvchange();
        }, error => {
          console.log('Erro: '+error);             
          this.presentToast('Erro ao finalizar compra!');
        });

      }}
      ]
    });
    alert.present();
  }

  showIvchange(){
    const alert = this.alertCtrl.create({
      title: 'Venda Finalizada!',
      subTitle: 'Troco: '+this.invoice.iv_change+'',
      buttons: [ 
        {text: 'Ok', handler: data => {
          this.navCtrl.push(DetalinvoicePage, {nvc_code: this.invoice.nvc_code});
        }}
      ]
    });
    alert.present();
    this.msg = 'Caixa Fechado';  
  }

  insertLoose(){
    const alert = this.alertCtrl.create({
      title: 'Produto Avulso',
      //subTitle: 'Valor Total: '+this.invoice.iv_valueinvoice+'',
      inputs: [         
        { name: 'nvc_prd_name', placeholder: 'Nome do produto', type: 'text' },
        { name: 'nvc_prp_price', placeholder: '00.00', type: 'text' }
      ],
      buttons: [
      { text: 'Cancelar', role: 'cancel', handler: data => { }},
      { text: 'Inserir', handler: data => { 
        let nvc_prp_price = data.nvc_prp_price.replace(',', '.');

        this.invoice.nvc_prd_name = data.nvc_prd_name;
        this.invoice.nvc_prp_price = nvc_prp_price;

        this.invoiceProvider.insertLoose(this.invoice).subscribe(res => {            
          this.getInvoiceById();
        }, error => {
          console.log('Erro: '+error);             
          this.presentToast('Erro ao inserir produto!');
        });
      }}
      ]
    });
    alert.present();
  }

  removeProductInvoice(product: any){
    console.log(product.nvc_id, this.invoice.nvc_code);
    this.invoiceProvider.removeProductInvoice(product.nvc_id, this.invoice.nvc_code).subscribe(res => {
      this.getInvoiceById();
    }, error => {

    });
  }

  presentToast(pMessage: string) {
    let toast = this.toast.create({ message: pMessage, duration: 3000, position: 'top' });
    toast.present();
  }

}

