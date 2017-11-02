import { Api } from './../../providers/api/api';
import { ProductsProvider } from './../../providers/products/products';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterQtdProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-qtd-product',
  templateUrl: 'register-qtd-product.html',
})
export class RegisterQtdProductPage {

  private barcodeText:String;
  private barcodeFormat:String;
  private platform:Platform;	
  private navController:NavController;
  private product:any = this.productsProvider.product;

  constructor(public navCtrl: NavController, private barcode: BarcodeScanner, private productsProvider: ProductsProvider, 
    platform: Platform, public api: Api, public loadingCtrl: LoadingController, private toast: ToastController) {
      this.platform = platform;
      this.navController = navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterQtdProductPage');
  }

  readProduct(){
    console.log('scannig product barcode');
      this.platform.ready().then(() => {
          this.barcode.scan().then((result) => {
            if (!result.cancelled) {
              this.barcodeText = result.text;
              this.barcodeFormat = result.format;              
              this.product.prd_code = Number(this.barcodeText);
              
              this.returnProduct();          
            }
          }, (error) => {
            console.log('error when scanning product barcode');
          });
      });  		
  }

  returnProduct(){
    let loading = this.loadingCtrl.create({ spinner: 'dots' });
    loading.present();    

    this.productsProvider.returnProductById(this.product.prd_code).subscribe(res => {  
      loading.dismiss();

      this.product.prd_code = 0;
      this.product.prd_name = '';
      this.product.pq_qtd = '';
      this.product.pq_qtd_new = 0;

      if (res.json()[0][0].st == 0){
        this.presentToast(res.json()[0][0].msg);
      } else {
        this.product = res.json()[0][0];
      }  
    }, error => {
      loading.dismiss();
      console.log(error);
      this.presentToast('Erro ao encontrar o produto');
    });
  }

  registerQtdProduct(){
    let loading = this.loadingCtrl.create({ spinner: 'dots', content: 'Registrando quantidade...' });
    loading.present();

    this.productsProvider.registerQtdProduct(this.product).subscribe(res => {   
      loading.dismiss();

      this.presentToast(res.json()[0][0].msg);

      this.product.prd_code = 0;
      this.product.prd_name = '';
      this.product.pq_qtd = '';
      this.product.pq_qtd_new = 0;

    }, error => {
      loading.dismiss();
      console.log(error);
      this.presentToast('Erro ao registrar o produto');
    });
    
  }

  presentToast(pMessage: string) {
    let toast = this.toast.create({ message: pMessage, duration: 3000, position: 'top' });
    toast.present();
  }

}
