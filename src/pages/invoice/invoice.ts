import { InvoiceProvider } from './../../providers/invoice/invoice';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';

/**
 * Generated class for the InvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {

  private products: any[] = [];
  private valortotal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private invoiceProvider: InvoiceProvider,
    public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicePage');
    let invoicecode = Number(localStorage.getItem('invoicecode'));
    this.showInvoice(invoicecode);
  }

  showInvoice(invoicecode: number){
    let loading = this.loadingCtrl.create({ spinner: 'dots' });    
    loading.present();

    this.invoiceProvider.getInvoiceById(invoicecode).subscribe(res => {          
      loading.dismiss();
      this.products = res.json()[0];
      this.valortotal = res.json()[1][0].valortotal;
        console.log(res.json());      
    }, error => {
      loading.dismiss();
      let toast = this.toastCtrl.create({ message: 'Erro ao listar os produtos!', duration: 3000, position: 'top' });
      toast.present();
    });
  }

}
