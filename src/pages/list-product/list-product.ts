import { ProductsProvider } from './../../providers/products/products';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the ListProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-product',
  templateUrl: 'list-product.html',
})
export class ListProductPage {

  private products: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController,
     private toast: ToastController, private productsProvider: ProductsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListProductPage');
    this.listProducts();
  }

  listProducts(){
    let loading = this.loadingCtrl.create({ spinner: 'dots', content: 'Listando produtos...' });
    loading.present();

    this.productsProvider.listproducts().subscribe(res => {      
      loading.dismiss();
      this.products = res.json()[0];
    }, error => {
      loading.dismiss();
      console.log(error);
      this.presentToast('Erro ao listar produtos!');
    });
  }

  presentToast(pMessage: string) {
    let toast = this.toast.create({ message: pMessage, duration: 3000, position: 'top' });
    toast.present();
  }

}
