import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Api } from '../api/api';

/*
  Generated class for the InvoiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InvoiceProvider {

  invoice: {nvc_code: number, nvc_prd_code: number, nvc_prd_name: string, nvc_prp_price: string, 
    iv_valueinvoice: string, iv_valuepaid: string,
     iv_discount: string, iv_formpayment: string, iv_change: string, iv_regdate: string} = {
      nvc_code: 0,
      nvc_prd_code: 0,
      nvc_prd_name: '',
      nvc_prp_price: '',
      iv_valueinvoice: '',
      iv_valuepaid: '',
      iv_discount: '00.00',
      iv_formpayment: '0',
      iv_change: '',
      iv_regdate: ''      
    };

  product: {prd_code: number, prd_name: string, prp_price: string, prp_newprice: number, cat_id: number, 
    pd_qtd: number, pq_qtd_new: number} = {
    prd_code: 0,
    prd_name: '',
    prp_price: '',
    prp_newprice: 0,
    cat_id: 1,
    pd_qtd: 0,
    pq_qtd_new: 0
  };

  constructor(public http: Http, public api: Api) {
    console.log('Hello InvoiceProvider Provider');
  }

  detalInvoice(obj: any){
    let seq = this.api.get('detalinvoice', obj);
    seq.map(res => res.json());
    return seq;
  }

  listInvoiceFinish(myDate1: any){
    let seq = this.api.get('listinvoicefinish', {myDate1: myDate1});    
    seq.map(res => res.json());
    return seq;
  }

  generateCodeInvoice(){
    let seq = this.api.get('generatecodeinvoice');    
    seq.map(res => res.json());
    return seq;
  }

  registerProductInvoice(obj: any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let seq = this.api.post('registerproductinvoice', obj, options);
    seq.map(res => res.json());
    return seq;
  }  

  getInvoiceById(nvc_code: number){
    let seq = this.api.get('returninvoicebyid', {nvc_code: nvc_code});    
    seq.map(res => res.json());
    return seq;
  }

  finishInvoice(obj: any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let seq = this.api.post('finishinvoice', obj, options);
    seq.map(res => res.json());
    return seq;
  }

  insertLoose(obj: any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let seq = this.api.post('insertloose', obj, options);
    seq.map(res => res.json());
    return seq;
  }

  removeProductInvoice(nvc_id: any, nvc_code: any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let seq = this.api.post('removeroductnvoice', {nvc_id: nvc_id, nvc_code: nvc_code}, options);
    seq.map(res => res.json());
    return seq;
  }

}
