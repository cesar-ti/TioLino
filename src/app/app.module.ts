import { UpdateQtdProductPage } from './../pages/update-qtd-product/update-qtd-product';
import { ListProductPage } from './../pages/list-product/list-product';
import { RegisterQtdProductPage } from './../pages/register-qtd-product/register-qtd-product';
import { UpdateProductPage } from './../pages/update-product/update-product';
import { DetalinvoicePage } from './../pages/detalinvoice/detalinvoice';
import { ShoppingListPage } from './../pages/shopping-list/shopping-list';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Printer, PrintOptions } from '@ionic-native/printer';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductsProvider } from '../providers/products/products';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { Api } from '../providers/api/api';
import { InvoicePage } from '../pages/invoice/invoice';
import { InvoiceProvider } from '../providers/invoice/invoice';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    tokenGetter: (() => localStorage.getItem('token')),
    globalHeaders: [{ 'Content-Type': 'application/json' }],
  }), http, options);
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    ShoppingListPage,
    InvoicePage,
    DetalinvoicePage,
    UpdateProductPage,
    RegisterQtdProductPage,
    ListProductPage,
    UpdateQtdProductPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
	CommonModule,	
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    ShoppingListPage,
    InvoicePage,
    DetalinvoicePage,
    UpdateProductPage,
    RegisterQtdProductPage,
    ListProductPage,
    UpdateQtdProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductsProvider,
    AUTH_PROVIDERS,
    AuthHttp,
    {
      provide: AuthConfig, useValue: new AuthConfig({
        tokenName: 'token'
      })
    },
    BarcodeScanner,
    Printer,        
    Api,    
    InvoiceProvider
  ]
})
export class AppModule {}
