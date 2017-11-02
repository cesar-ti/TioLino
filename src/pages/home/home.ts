import { UpdateQtdProductPage } from './../update-qtd-product/update-qtd-product';
import { UpdateProductPage } from './../update-product/update-product';
import { RegisterPage } from './../register/register';
import { ListProductPage } from './../list-product/list-product';
import { ListPage } from './../list/list';
import { ShoppingListPage } from './../shopping-list/shopping-list';
import { RegisterQtdProductPage } from './../register-qtd-product/register-qtd-product';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { Printer, PrintOptions } from '@ionic-native/printer';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products: any[] = [];
  private barcodeText:String;
  private barcodeFormat:String;
  private platform:Platform;	
  private navController:NavController;
  dados: any;

  constructor(public navCtrl: NavController, private barcode: BarcodeScanner, private productsProvider: ProductsProvider, 
    platform: Platform, private printer: Printer) {
    this.platform = platform;
    this.navController = navCtrl;
  }  

  ionViewDidLoad() {
    //this.products = this.productsProvider.getProducts();
  }   

  /*{ title: 'Inicial', component: HomePage },
      { title: 'Nova Venda', component: ShoppingListPage },
      { title: 'Relatório de Vendas', component: ListPage },
      { title: 'Relatório de Estoque', component: ListProductPage },
      { title: 'Cadastrar Produto', component: RegisterPage },
      { title: 'Inserir Quantidade', component: RegisterQtdProductPage },
      { title: 'Atualizar Preço', component: UpdateProductPage } ,     
      { title: 'Atualizar Estoque', component: UpdateQtdProductPage }  */

  goListShopping(){
    this.navCtrl.push(ShoppingListPage);
  }

  goList(){
    this.navCtrl.push(ListPage);
  }
  
  goListProduct(){
    this.navCtrl.push(ListProductPage);
  }

  goRegisterProduct(){
    this.navCtrl.push(RegisterPage);
  }

  goRegisterQtdProduct(){
    this.navCtrl.push(RegisterQtdProductPage);
  }

  goUpdateProduct(){
    this.navCtrl.push(UpdateProductPage);
  }
   
  goUpdateQtdProduct(){
    this.navCtrl.push(UpdateQtdProductPage);
  }
  
}
