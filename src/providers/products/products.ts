import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Api } from '../api/api';
/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider { 

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
    console.log('Hello ProductsProvider Provider');
  } 

  verifyProductById(prd_code: any){
    let seq = this.api.get('verifyproductbyid', {prd_code: prd_code});    
    seq.map(res => res.json());
    return seq;
  }

  registerProduct(obj: any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let seq = this.api.post('registerproduct', obj, options);
    seq.map(res => res.json());
    return seq;
  }

  updateProduct(obj: any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let seq = this.api.post('updateproduct', obj, options);
    seq.map(res => res.json());
    return seq;
  }

  returnProductById(prd_code: number){    
    let seq = this.api.get('returnproductbyid', {prd_code: prd_code});
    seq.map(res => res.json());
    return seq;
  }  

  registerQtdProduct(obj: any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let seq = this.api.post('registerqtdproduct', obj, options);
    seq.map(res => res.json());
    return seq;
  }

  listproducts(){    
    let seq = this.api.get('listproducts');
    seq.map(res => res.json());
    return seq;
  }

  listUpdateProduct(){
    let seq = this.api.get('listupdateproduct');
    seq.map(res => res.json());
    return seq;
  }

  updateQtdProduct(prd_code: number){
    let seq = this.api.post('updateqtdproduct', {prd_code: prd_code});
    seq.map(res => res.json());
    return seq;
  }

}
