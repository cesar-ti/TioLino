import { Component } from '@angular/core';
import { NavController, Platform, IonicPage, LoadingController, ToastController, AlertController  } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { Api } from '../../providers/api/api';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private barcodeText:String;
  private barcodeFormat:String;
  private platform:Platform;	
  private navController:NavController;
  private product:any = this.productsProvider.product;

  constructor(public navCtrl: NavController, private barcode: BarcodeScanner, private productsProvider: ProductsProvider,    
    platform: Platform, public api: Api, public loadingCtrl: LoadingController, private toast: ToastController,
    public alertCtrl: AlertController) {
    this.platform = platform;
    this.navController = navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');    
  }

  readProduct(){
    console.log('scannig product barcode');
      this.platform.ready().then(() => {
          this.barcode.scan().then((result) => {
            if (!result.cancelled) {
              this.barcodeText = result.text;
              this.barcodeFormat = result.format;              
              this.product.prd_code = Number(this.barcodeText);
              
              this.verifyProductById();          
            }
          }, (error) => {
            console.log('error when scanning product barcode');
          });
      });  		
  }

  saveProduct(){  
    let loading = this.loadingCtrl.create({ spinner: 'dots' });
    loading.present();    

    this.productsProvider.registerProduct(this.product).subscribe(res => {
      this.product.prd_code = 0;
      this.product.prd_name = '';
      this.product.prp_price = '';
      this.product.cat_id = 1;
      loading.dismiss();
      this.presentToast('Produto cadatrado com sucesso!');           
    }, error => {
      loading.dismiss();
      this.presentToast('Erro ao cadastrar o produto!');
    });
  }

  verifyProductById(){
    let loading = this.loadingCtrl.create({ spinner: 'dots' });
    loading.present();    

    this.productsProvider.verifyProductById(this.product.prd_code).subscribe(res => {      
      loading.dismiss();
      if (res.json()[0][0].st == 1){        
        this.presentToast('Produto já cadastrado!');
      }      
    }, erro => {
      loading.dismiss();
      this.presentToast('Erro de acesso ao servidor');
    });
  }  

  presentToast(pMessage: string) {
    let toast = this.toast.create({ message: pMessage, duration: 3000, position: 'top' });
    toast.present();
  }
}
