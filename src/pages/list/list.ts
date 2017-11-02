import { InvoiceProvider } from './../../providers/invoice/invoice';
import { DetalinvoicePage } from './../detalinvoice/detalinvoice';
import { ProductsProvider } from './../../providers/products/products';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  private invoices: any[] = [];
  private myDate1: string;
  private myDate2: string;
  private total_value: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private invoiceProvider: InvoiceProvider, public loadingCtrl: LoadingController,private toast: ToastController) {

  }

  ionViewDidLoad(){
    
  }

  searchInvoice(){
    let loading = this.loadingCtrl.create({ spinner: 'dots', content: 'Processando relatório...' });
    loading.present();

    this.total_value = '';    

    this.invoiceProvider.listInvoiceFinish(this.myDate1).subscribe(res => {
      loading.dismiss();
      if (res.json()[0] == '') {
        this.presentToast('Nem uma venda realizada!');
      } else {
        this.invoices = res.json()[0];      
        this.total_value = res.json()[1][0].total_value;
      }
      
    }, error => {
      loading.dismiss();
      this.presentToast('Erro ao gerar o relatório!');      
    });
  }



  redirectDetalInvoice(invoice: any){
  
      this.navCtrl.push(DetalinvoicePage, {nvc_code: invoice.nvc_code});

  }

  presentToast(pMessage: string) {
    let toast = this.toast.create({ message: pMessage, duration: 3000, position: 'top' });
    toast.present();
  }

  

}
