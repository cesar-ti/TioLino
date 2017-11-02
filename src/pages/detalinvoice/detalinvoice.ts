import { InvoiceProvider } from './../../providers/invoice/invoice';
import { ProductsProvider } from './../../providers/products/products';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalinvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalinvoice',
  templateUrl: 'detalinvoice.html',
})
export class DetalinvoicePage {

  private products: any[] = [];
  private invoice: any = this.invoiceProvider.invoice;

  constructor(public navCtrl: NavController, public navParams: NavParams, private invoiceProvider: InvoiceProvider) {
    this.invoice.nvc_code = this.navParams.get('nvc_code');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalinvoicePage');
    this.detalInvoice(this.invoice);
  }

  detalInvoice(invoice: any){
    this.invoiceProvider.detalInvoice(invoice).subscribe(res => {
      console.log(res.json());
      this.products = res.json()[0];
      this.invoice = res.json()[1][0];
    }, error => {

    });
  }

}
