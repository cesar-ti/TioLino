import { ProductsProvider } from './../../providers/products/products';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the UpdateQtdProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-qtd-product',
  templateUrl: 'update-qtd-product.html',
})
export class UpdateQtdProductPage {

  private products: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController,
    private toast: ToastController, private productsProvider: ProductsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateQtdProductPage');
    this.listUpdateProduct();
  }

  listUpdateProduct(){
    let loading = this.loadingCtrl.create({ spinner: 'dots', content: 'Listando produtos...' });
    loading.present();

    this.productsProvider.listUpdateProduct().subscribe(res => {
      loading.dismiss();
      this.products = res.json()[0];
    }, error => {
      loading.dismiss();
      console.log(error);      
      this.presentToast('Erro ao listar produtos!');
    });
  }

  updateQtdProduct(item: any){
    let loading = this.loadingCtrl.create({ spinner: 'dots', content: 'Atualizando produto...' });
    loading.present();

    this.productsProvider.updateQtdProduct(item.prd_code).subscribe(res => {
      loading.dismiss();
      this.listUpdateProduct();
      
    }, error => {
      loading.dismiss();
      console.log(error);      
      this.presentToast('Erro ao atualizar o produto!');
    });
  }

  presentToast(pMessage: string) {
    let toast = this.toast.create({ message: pMessage, duration: 3000, position: 'top' });
    toast.present();
  }

}
