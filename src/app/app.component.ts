import { UpdateQtdProductPage } from './../pages/update-qtd-product/update-qtd-product';
import { RegisterQtdProductPage } from './../pages/register-qtd-product/register-qtd-product';
import { ListProductPage } from './../pages/list-product/list-product';
import { UpdateProductPage } from './../pages/update-product/update-product';
import { ShoppingListPage } from './../pages/shopping-list/shopping-list';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from '../pages/register/register';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicial', component: HomePage },
      { title: 'Nova Venda', component: ShoppingListPage },
      { title: 'Relatório de Vendas', component: ListPage },
      { title: 'Relatório de Estoque', component: ListProductPage },
      { title: 'Cadastrar Produto', component: RegisterPage },
      { title: 'Inserir Quantidade', component: RegisterQtdProductPage },
      { title: 'Atualizar Preço', component: UpdateProductPage } ,     
      { title: 'Atualizar Estoque', component: UpdateQtdProductPage } 
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
    this.nav.push(page.component);
  }
}
