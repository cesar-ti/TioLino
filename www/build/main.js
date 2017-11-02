webpackJsonp([8],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_invoice_invoice__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detalinvoice_detalinvoice__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = (function () {
    function ListPage(navCtrl, navParams, invoiceProvider, loadingCtrl, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.invoiceProvider = invoiceProvider;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.invoices = [];
    }
    ListPage.prototype.ionViewDidLoad = function () {
    };
    ListPage.prototype.searchInvoice = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ spinner: 'dots', content: 'Processando relatório...' });
        loading.present();
        this.total_value = '';
        this.invoiceProvider.listInvoiceFinish(this.myDate1).subscribe(function (res) {
            loading.dismiss();
            if (res.json()[0] == '') {
                _this.presentToast('Nem uma venda realizada!');
            }
            else {
                _this.invoices = res.json()[0];
                _this.total_value = res.json()[1][0].total_value;
            }
        }, function (error) {
            loading.dismiss();
            _this.presentToast('Erro ao gerar o relatório!');
        });
    };
    ListPage.prototype.redirectDetalInvoice = function (invoice) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__detalinvoice_detalinvoice__["a" /* DetalinvoicePage */], { nvc_code: invoice.nvc_code });
    };
    ListPage.prototype.presentToast = function (pMessage) {
        var toast = this.toast.create({ message: pMessage, duration: 3000, position: 'top' });
        toast.present();
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Relatório de Vendas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <form #formCtrl="ngForm">\n      <ion-item>\n        <ion-label>Data</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="myDate1" name="myDate1" required></ion-datetime>    \n      </ion-item>\n      <button ion-button block color="secondary" [disabled]="!formCtrl.form.valid" (click)="searchInvoice()">Pesquisar</button>\n    </form>\n  </ion-list>\n\n  <p>Valor total do dia: {{total_value}}</p>\n\n  <ion-grid>\n    <ion-row style="background-color: #DCDCDC">\n      <ion-col col-3>\n        Código\n      </ion-col>\n      <ion-col col-2>\n        Qtd\n      </ion-col>\n      <ion-col col-7>\n        Data de Registro\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor="let invoice of invoices">\n      <ion-col col-3>\n        <a (click)="redirectDetalInvoice(invoice)">{{invoice.nvc_code}}</a>\n      </ion-col>\n      <ion-col col-2>\n        {{invoice.qtd}}\n      </ion-col>\n      <ion-col col-7>\n        {{invoice.nvc_regdate | date:"dd/MM/yyyy HH:mm:ss"}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_invoice_invoice__["a" /* InvoiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detalinvoice/detalinvoice.module": [
		288,
		7
	],
	"../pages/invoice/invoice.module": [
		289,
		6
	],
	"../pages/list-product/list-product.module": [
		286,
		5
	],
	"../pages/register-qtd-product/register-qtd-product.module": [
		285,
		4
	],
	"../pages/register/register.module": [
		291,
		3
	],
	"../pages/shopping-list/shopping-list.module": [
		290,
		2
	],
	"../pages/update-product/update-product.module": [
		287,
		1
	],
	"../pages/update-qtd-product/update-qtd-product.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__update_qtd_product_update_qtd_product__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_product_update_product__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_product_list_product__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shopping_list_shopping_list__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_qtd_product_register_qtd_product__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_products_products__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_barcode_scanner__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_printer__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomePage = (function () {
    function HomePage(navCtrl, barcode, productsProvider, platform, printer) {
        this.navCtrl = navCtrl;
        this.barcode = barcode;
        this.productsProvider = productsProvider;
        this.printer = printer;
        this.products = [];
        this.platform = platform;
        this.navController = navCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        //this.products = this.productsProvider.getProducts();
    };
    /*{ title: 'Inicial', component: HomePage },
        { title: 'Nova Venda', component: ShoppingListPage },
        { title: 'Relatório de Vendas', component: ListPage },
        { title: 'Relatório de Estoque', component: ListProductPage },
        { title: 'Cadastrar Produto', component: RegisterPage },
        { title: 'Inserir Quantidade', component: RegisterQtdProductPage },
        { title: 'Atualizar Preço', component: UpdateProductPage } ,
        { title: 'Atualizar Estoque', component: UpdateQtdProductPage }  */
    HomePage.prototype.goListShopping = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__shopping_list_shopping_list__["a" /* ShoppingListPage */]);
    };
    HomePage.prototype.goList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */]);
    };
    HomePage.prototype.goListProduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_product_list_product__["a" /* ListProductPage */]);
    };
    HomePage.prototype.goRegisterProduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.goRegisterQtdProduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_qtd_product_register_qtd_product__["a" /* RegisterQtdProductPage */]);
    };
    HomePage.prototype.goUpdateProduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__update_product_update_product__["a" /* UpdateProductPage */]);
    };
    HomePage.prototype.goUpdateQtdProduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__update_qtd_product_update_qtd_product__["a" /* UpdateQtdProductPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- /*{ title: \'Inicial\', component: HomePage },\n  { title: \'Nova Venda\', component: ShoppingListPage },\n  { title: \'Relatório de Vendas\', component: ListPage },\n  { title: \'Relatório de Estoque\', component: ListProductPage },\n  { title: \'Cadastrar Produto\', component: RegisterPage },\n  { title: \'Inserir Quantidade\', component: RegisterQtdProductPage },\n  { title: \'Atualizar Preço\', component: UpdateProductPage } ,     \n  { title: \'Atualizar Estoque\', component: UpdateQtdProductPage }  */ -->\n\n  <h2>Página Inicial</h2> \n\n  <button ion-button class="botao" color="light" (click)="goListShopping()">Nova Venda</button>\n\n  <button ion-button class="botao" color="light" (click)="goList()">Relatório de Vendas</button>\n\n  <button ion-button class="botao" color="light" (click)="goListProduct()">Relatório de Estoque</button>\n\n  <button ion-button class="botao" color="light" (click)="goRegisterProduct()">Cadastrar Produto</button>\n\n  <button ion-button class="botao" color="light" (click)="goRegisterQtdProduct()">Inserir Quantidade</button>\n\n  <button ion-button class="botao" color="light" (click)="goUpdateProduct()">Atualizar Preço</button>\n\n  <button ion-button class="botao" color="light" (click)="goUpdateQtdProduct()">Atualizar Estoque</button>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_9__providers_products_products__["a" /* ProductsProvider */],
        __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_printer__["a" /* Printer */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_invoice_invoice__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvoicePage = (function () {
    function InvoicePage(navCtrl, navParams, invoiceProvider, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.invoiceProvider = invoiceProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.products = [];
    }
    InvoicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvoicePage');
        var invoicecode = Number(localStorage.getItem('invoicecode'));
        this.showInvoice(invoicecode);
    };
    InvoicePage.prototype.showInvoice = function (invoicecode) {
        var _this = this;
        var loading = this.loadingCtrl.create({ spinner: 'dots' });
        loading.present();
        this.invoiceProvider.getInvoiceById(invoicecode).subscribe(function (res) {
            loading.dismiss();
            _this.products = res.json()[0];
            _this.valortotal = res.json()[1][0].valortotal;
            console.log(res.json());
        }, function (error) {
            loading.dismiss();
            var toast = _this.toastCtrl.create({ message: 'Erro ao listar os produtos!', duration: 3000, position: 'top' });
            toast.present();
        });
    };
    return InvoicePage;
}());
InvoicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-invoice',template:/*ion-inline-start:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\invoice\invoice.html"*/'<!--\n  Generated template for the InvoicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Invoice</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <table class="printer-ticket">\n        <thead>\n         <tr>\n           <th class="title" colspan="3">Victor Shop</th>\n         </tr>\n         <tr>\n           <th colspan="3">17/11/2015 - 11:57:52</th>\n         </tr>\n         <tr>\n           <th colspan="3">\n             Nome do cliente <br />\n             000.000.000-00\n           </th>\n         </tr>\n         <tr>\n           <th class="ttu" colspan="3">\n             <b>Cupom não fiscal</b>\n           </th>\n         </tr>\n       </thead>\n       <tbody *ngFor="let product of products">\n         <tr class="top">\n            <td colspan="3">{{product.prd_name}}</td>\n           <!-- <td colspan="3">Doce de brigadeiro</td> -->\n         </tr>\n         <tr>\n            <td>{{product.prd_code}}</td>\n            <td>01</td>\n            <td>{{product.prd_price}}</td>\n         </tr>         \n       </tbody>\n       <tfoot>\n         <tr class="sup ttu p--0">\n           <td colspan="3">\n             <b>Totais</b>\n           </td>\n         </tr>\n         <tr class="ttu">\n           <td colspan="2">Sub-total</td>\n           <td align="right">R$43,60</td>\n         </tr>\n         <tr class="ttu">\n           <td colspan="2">Taxa de serviço</td>\n           <td align="right">R$4,60</td>\n         </tr>\n         <tr class="ttu">\n           <td colspan="2">Desconto</td>\n           <td align="right">5,00%</td>\n         </tr>\n         <tr class="ttu">\n           <td colspan="2">Total</td>\n           <td align="right">R$45,56</td>\n         </tr>\n         <tr class="sup ttu p--0">\n           <td colspan="3">\n             <b>Pagamentos</b>\n           </td>\n         </tr>\n         <tr class="ttu">\n           <td colspan="2">Voucher</td>\n           <td align="right">R$10,00</td>\n         </tr>\n         <tr class="ttu">\n           <td colspan="2">Dinheiro</td>\n           <td align="right">R$10,00</td>\n         </tr>\n         <tr class="ttu">\n           <td colspan="2">Total pago</td>\n           <td align="right">R$10,00</td>\n         </tr>\n         <tr class="ttu">\n           <td colspan="2">Troco</td>\n           <td align="right">R$0,44</td>\n         </tr>\n         <tr class="sup">\n           <td colspan="3" align="center">\n             <b>Pedido:</b>\n           </td>\n         </tr>\n         <tr class="sup">\n           <td colspan="3" align="center">\n             www.site.com\n           </td>\n         </tr>\n       </tfoot>\n     </table>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\invoice\invoice.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_invoice_invoice__["a" /* InvoiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
], InvoicePage);

//# sourceMappingURL=invoice.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_update_qtd_product_update_qtd_product__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_list_product_list_product__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_register_qtd_product_register_qtd_product__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_update_product_update_product__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_detalinvoice_detalinvoice__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_shopping_list_shopping_list__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_printer__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_jwt__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_list_list__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_register_register__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_products_products__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_barcode_scanner__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_api_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_invoice_invoice__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_invoice_invoice__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_12_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_12_angular2_jwt__["AuthConfig"]({
        tokenName: 'token',
        tokenGetter: (function () { return localStorage.getItem('token'); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }],
    }), http, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_invoice_invoice__["a" /* InvoicePage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_detalinvoice_detalinvoice__["a" /* DetalinvoicePage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_update_product_update_product__["a" /* UpdateProductPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_register_qtd_product_register_qtd_product__["a" /* RegisterQtdProductPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_list_product_list_product__["a" /* ListProductPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_update_qtd_product_update_qtd_product__["a" /* UpdateQtdProductPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/update-qtd-product/update-qtd-product.module#UpdateQtdProductPageModule', name: 'UpdateQtdProductPage', segment: 'update-qtd-product', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register-qtd-product/register-qtd-product.module#RegisterQtdProductPageModule', name: 'RegisterQtdProductPage', segment: 'register-qtd-product', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/list-product/list-product.module#ListProductPageModule', name: 'ListProductPage', segment: 'list-product', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/update-product/update-product.module#UpdateProductPageModule', name: 'UpdateProductPage', segment: 'update-product', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detalinvoice/detalinvoice.module#DetalinvoicePageModule', name: 'DetalinvoicePage', segment: 'detalinvoice', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/invoice/invoice.module#InvoicePageModule', name: 'InvoicePage', segment: 'invoice', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/shopping-list/shopping-list.module#ShoppingListPageModule', name: 'ShoppingListPage', segment: 'shopping-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_invoice_invoice__["a" /* InvoicePage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_detalinvoice_detalinvoice__["a" /* DetalinvoicePage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_update_product_update_product__["a" /* UpdateProductPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_register_qtd_product_register_qtd_product__["a" /* RegisterQtdProductPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_list_product_list_product__["a" /* ListProductPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_update_qtd_product_update_qtd_product__["a" /* UpdateQtdProductPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_19__providers_products_products__["a" /* ProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_12_angular2_jwt__["AUTH_PROVIDERS"],
            __WEBPACK_IMPORTED_MODULE_12_angular2_jwt__["AuthHttp"],
            {
                provide: __WEBPACK_IMPORTED_MODULE_12_angular2_jwt__["AuthConfig"], useValue: new __WEBPACK_IMPORTED_MODULE_12_angular2_jwt__["AuthConfig"]({
                    tokenName: 'token'
                })
            },
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_printer__["a" /* Printer */],
            __WEBPACK_IMPORTED_MODULE_21__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_23__providers_invoice_invoice__["a" /* InvoiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductsProvider = (function () {
    function ProductsProvider(http, api) {
        this.http = http;
        this.api = api;
        this.invoice = {
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
        this.product = {
            prd_code: 0,
            prd_name: '',
            prp_price: '',
            prp_newprice: 0,
            cat_id: 1,
            pd_qtd: 0,
            pq_qtd_new: 0
        };
        console.log('Hello ProductsProvider Provider');
    }
    ProductsProvider.prototype.verifyProductById = function (prd_code) {
        var seq = this.api.get('verifyproductbyid', { prd_code: prd_code });
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    ProductsProvider.prototype.registerProduct = function (obj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var seq = this.api.post('registerproduct', obj, options);
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    ProductsProvider.prototype.updateProduct = function (obj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var seq = this.api.post('updateproduct', obj, options);
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    ProductsProvider.prototype.returnProductById = function (prd_code) {
        var seq = this.api.get('returnproductbyid', { prd_code: prd_code });
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    ProductsProvider.prototype.registerQtdProduct = function (obj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var seq = this.api.post('registerqtdproduct', obj, options);
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    ProductsProvider.prototype.listproducts = function () {
        var seq = this.api.get('listproducts');
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    ProductsProvider.prototype.listUpdateProduct = function () {
        var seq = this.api.get('listupdateproduct');
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    ProductsProvider.prototype.updateQtdProduct = function (prd_code) {
        var seq = this.api.post('updateqtdproduct', { prd_code: prd_code });
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    return ProductsProvider;
}());
ProductsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__api_api__["a" /* Api */]])
], ProductsProvider);

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = (function () {
    function Api(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.url = 'http://localhost:8095';
        //url: string = 'https://node-server-tiolino.herokuapp.com';
        this.token = '';
    }
    Api.prototype.get = function (endpoint, params, options) {
        if (!options) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        }
        // Support easy query params for GET requests
        if (params) {
            var p = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
            for (var k in params) {
                p.set(k, params[k]);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;
        }
        return this.http.get(this.url + '/' + endpoint, options);
    };
    Api.prototype.gets = function (endpoint, params, options) {
        if (!options) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        }
        // Support easy query params for GET requests
        if (params) {
            var p = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
            for (var k in params) {
                p.set(k, params[k]);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;
        }
        return this.authHttp.get(this.url + '/' + endpoint, options);
    };
    Api.prototype.post = function (endpoint, body, options) {
        return this.http.post(this.url + '/' + endpoint, body, options);
    };
    Api.prototype.posts = function (endpoint, body, options) {
        return this.authHttp.post(this.url + '/' + endpoint, body, options);
    };
    Api.prototype.put = function (endpoint, body, options) {
        return this.http.put(this.url + '/' + endpoint, body, options);
    };
    Api.prototype.delete = function (endpoint, options) {
        return this.http.delete(this.url + '/' + endpoint, options);
    };
    Api.prototype.patch = function (endpoint, body, options) {
        return this.http.put(this.url + '/' + endpoint, body, options);
    };
    return Api;
}());
Api = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"]])
], Api);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_update_qtd_product_update_qtd_product__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_register_qtd_product_register_qtd_product__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_list_product_list_product__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_update_product_update_product__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_shopping_list_shopping_list__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_list__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicial', component: __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */] },
            { title: 'Nova Venda', component: __WEBPACK_IMPORTED_MODULE_4__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */] },
            { title: 'Relatório de Vendas', component: __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */] },
            { title: 'Relatório de Estoque', component: __WEBPACK_IMPORTED_MODULE_2__pages_list_product_list_product__["a" /* ListProductPage */] },
            { title: 'Cadastrar Produto', component: __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */] },
            { title: 'Inserir Quantidade', component: __WEBPACK_IMPORTED_MODULE_1__pages_register_qtd_product_register_qtd_product__["a" /* RegisterQtdProductPage */] },
            { title: 'Atualizar Preço', component: __WEBPACK_IMPORTED_MODULE_3__pages_update_product_update_product__["a" /* UpdateProductPage */] },
            { title: 'Atualizar Estoque', component: __WEBPACK_IMPORTED_MODULE_0__pages_update_qtd_product_update_qtd_product__["a" /* UpdateQtdProductPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //this.nav.setRoot(page.component);
        this.nav.push(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({template:/*ion-inline-start:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the InvoiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var InvoiceProvider = (function () {
    function InvoiceProvider(http, api) {
        this.http = http;
        this.api = api;
        this.invoice = {
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
        this.product = {
            prd_code: 0,
            prd_name: '',
            prp_price: '',
            prp_newprice: 0,
            cat_id: 1,
            pd_qtd: 0,
            pq_qtd_new: 0
        };
        console.log('Hello InvoiceProvider Provider');
    }
    InvoiceProvider.prototype.detalInvoice = function (obj) {
        var seq = this.api.get('detalinvoice', obj);
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    InvoiceProvider.prototype.listInvoiceFinish = function (myDate1) {
        var seq = this.api.get('listinvoicefinish', { myDate1: myDate1 });
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    InvoiceProvider.prototype.generateCodeInvoice = function () {
        var seq = this.api.get('generatecodeinvoice');
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    InvoiceProvider.prototype.registerProductInvoice = function (obj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var seq = this.api.post('registerproductinvoice', obj, options);
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    InvoiceProvider.prototype.getInvoiceById = function (nvc_code) {
        var seq = this.api.get('returninvoicebyid', { nvc_code: nvc_code });
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    InvoiceProvider.prototype.finishInvoice = function (obj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var seq = this.api.post('finishinvoice', obj, options);
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    InvoiceProvider.prototype.insertLoose = function (obj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var seq = this.api.post('insertloose', obj, options);
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    InvoiceProvider.prototype.removeProductInvoice = function (nvc_id, nvc_code) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var seq = this.api.post('removeroductnvoice', { nvc_id: nvc_id, nvc_code: nvc_code }, options);
        seq.map(function (res) { return res.json(); });
        return seq;
    };
    return InvoiceProvider;
}());
InvoiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__api_api__["a" /* Api */]])
], InvoiceProvider);

//# sourceMappingURL=invoice.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateQtdProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_products_products__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UpdateQtdProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateQtdProductPage = (function () {
    function UpdateQtdProductPage(navCtrl, navParams, loadingCtrl, toast, productsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.productsProvider = productsProvider;
        this.products = [];
    }
    UpdateQtdProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateQtdProductPage');
        this.listUpdateProduct();
    };
    UpdateQtdProductPage.prototype.listUpdateProduct = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ spinner: 'dots', content: 'Listando produtos...' });
        loading.present();
        this.productsProvider.listUpdateProduct().subscribe(function (res) {
            loading.dismiss();
            _this.products = res.json()[0];
        }, function (error) {
            loading.dismiss();
            console.log(error);
            _this.presentToast('Erro ao listar produtos!');
        });
    };
    UpdateQtdProductPage.prototype.updateQtdProduct = function (item) {
        var _this = this;
        var loading = this.loadingCtrl.create({ spinner: 'dots', content: 'Atualizando produto...' });
        loading.present();
        this.productsProvider.updateQtdProduct(item.prd_code).subscribe(function (res) {
            loading.dismiss();
            _this.listUpdateProduct();
        }, function (error) {
            loading.dismiss();
            console.log(error);
            _this.presentToast('Erro ao atualizar o produto!');
        });
    };
    UpdateQtdProductPage.prototype.presentToast = function (pMessage) {
        var toast = this.toast.create({ message: pMessage, duration: 3000, position: 'top' });
        toast.present();
    };
    return UpdateQtdProductPage;
}());
UpdateQtdProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-update-qtd-product',template:/*ion-inline-start:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\update-qtd-product\update-qtd-product.html"*/'<!--\n  Generated template for the UpdateQtdProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Atualizar Estoque</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-grid>\n      <ion-row style="background-color: #DCDCDC">\n        <ion-col col-4>\n          Código\n        </ion-col>\n        <ion-col col-3>\n          Estoque\n        </ion-col>\n        <ion-col col-3>\n          Notas\n        </ion-col>\n        <ion-col col-2>\n          \n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor="let item of products">\n        <ion-col col-4>\n          {{item.prd_code}}\n        </ion-col>\n        <ion-col col-3>\n          {{item.pq_qtd}}\n        </ion-col>\n        <ion-col col-3>\n          {{item.qtd_invoice}}\n        </ion-col>\n        <ion-col col-2>\n          <button (click)="updateQtdProduct(item)">Atualizar</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\update-qtd-product\update-qtd-product.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__providers_products_products__["a" /* ProductsProvider */]])
], UpdateQtdProductPage);

//# sourceMappingURL=update-qtd-product.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterQtdProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_products_products__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegisterQtdProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterQtdProductPage = (function () {
    function RegisterQtdProductPage(navCtrl, barcode, productsProvider, platform, api, loadingCtrl, toast) {
        this.navCtrl = navCtrl;
        this.barcode = barcode;
        this.productsProvider = productsProvider;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.product = this.productsProvider.product;
        this.platform = platform;
        this.navController = navCtrl;
    }
    RegisterQtdProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterQtdProductPage');
    };
    RegisterQtdProductPage.prototype.readProduct = function () {
        var _this = this;
        console.log('scannig product barcode');
        this.platform.ready().then(function () {
            _this.barcode.scan().then(function (result) {
                if (!result.cancelled) {
                    _this.barcodeText = result.text;
                    _this.barcodeFormat = result.format;
                    _this.product.prd_code = Number(_this.barcodeText);
                    _this.returnProduct();
                }
            }, function (error) {
                console.log('error when scanning product barcode');
            });
        });
    };
    RegisterQtdProductPage.prototype.returnProduct = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ spinner: 'dots' });
        loading.present();
        this.productsProvider.returnProductById(this.product.prd_code).subscribe(function (res) {
            loading.dismiss();
            _this.product.prd_code = 0;
            _this.product.prd_name = '';
            _this.product.pq_qtd = '';
            _this.product.pq_qtd_new = 0;
            if (res.json()[0][0].st == 0) {
                _this.presentToast(res.json()[0][0].msg);
            }
            else {
                _this.product = res.json()[0][0];
            }
        }, function (error) {
            loading.dismiss();
            console.log(error);
            _this.presentToast('Erro ao encontrar o produto');
        });
    };
    RegisterQtdProductPage.prototype.registerQtdProduct = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ spinner: 'dots', content: 'Registrando quantidade...' });
        loading.present();
        this.productsProvider.registerQtdProduct(this.product).subscribe(function (res) {
            loading.dismiss();
            _this.presentToast(res.json()[0][0].msg);
            _this.product.prd_code = 0;
            _this.product.prd_name = '';
            _this.product.pq_qtd = '';
            _this.product.pq_qtd_new = 0;
        }, function (error) {
            loading.dismiss();
            console.log(error);
            _this.presentToast('Erro ao registrar o produto');
        });
    };
    RegisterQtdProductPage.prototype.presentToast = function (pMessage) {
        var toast = this.toast.create({ message: pMessage, duration: 3000, position: 'top' });
        toast.present();
    };
    return RegisterQtdProductPage;
}());
RegisterQtdProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-register-qtd-product',template:/*ion-inline-start:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\register-qtd-product\register-qtd-product.html"*/'<!--\n  Generated template for the RegisterQtdProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registrar Quantidade</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button block (click)="readProduct()">Ler Código</button>\n\n  <form (ngSubmit)="registerQtdProduct()" #formCtrl02="ngForm">\n    <ion-list>      \n        <ion-item>\n          <ion-label color="primary" floating>Código</ion-label>\n          <ion-input type="text" [(ngModel)] = "product.prd_code" disabled="true" name="prd_code" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color="primary" floating>Nome</ion-label>\n          <ion-input type="text" [(ngModel)] = "product.prd_name" disabled="true" name="prd_name" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color="primary" floating>Quantidade no Estoque</ion-label>\n          <ion-input type="number" [(ngModel)] = "product.pq_qtd" disabled="true" name="pq_qtd" required></ion-input>\n        </ion-item>       \n        <ion-item>\n        <ion-label color="primary">Inserir Quantidade</ion-label>\n          <ion-input type="number" [(ngModel)] = "product.pq_qtd_new" name="pq_qtd_new" \n          placeholder="Insira a quantidade do produto" required></ion-input>\n        </ion-item>      \n    </ion-list>\n\n    <button ion-button block color="secondary" [disabled]="!formCtrl02.form.valid">Inserir Quantidade</button>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\register-qtd-product\register-qtd-product.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1__providers_products_products__["a" /* ProductsProvider */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__providers_api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* ToastController */]])
], RegisterQtdProductPage);

//# sourceMappingURL=register-qtd-product.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_products_products__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ListProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListProductPage = (function () {
    function ListProductPage(navCtrl, navParams, loadingCtrl, toast, productsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.productsProvider = productsProvider;
        this.products = [];
    }
    ListProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListProductPage');
        this.listProducts();
    };
    ListProductPage.prototype.listProducts = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ spinner: 'dots', content: 'Listando produtos...' });
        loading.present();
        this.productsProvider.listproducts().subscribe(function (res) {
            loading.dismiss();
            _this.products = res.json()[0];
        }, function (error) {
            loading.dismiss();
            console.log(error);
            _this.presentToast('Erro ao listar produtos!');
        });
    };
    ListProductPage.prototype.presentToast = function (pMessage) {
        var toast = this.toast.create({ message: pMessage, duration: 3000, position: 'top' });
        toast.present();
    };
    return ListProductPage;
}());
ListProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-list-product',template:/*ion-inline-start:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\list-product\list-product.html"*/'<!--\n  Generated template for the ListProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>list-product</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-grid>\n        <ion-row style="background-color: #DCDCDC">\n          <ion-col col-4>\n            Código\n          </ion-col>\n          <ion-col col-5>\n            Produto\n          </ion-col>\n          <ion-col col-3>\n            Qtd\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor="let item of products">\n          <ion-col col-4>\n            {{item.prd_code}}\n          </ion-col>\n          <ion-col col-5>\n            {{item.prd_name}}\n          </ion-col>\n          <ion-col col-3>\n            {{item.pq_qtd}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\list-product\list-product.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__providers_products_products__["a" /* ProductsProvider */]])
], ListProductPage);

//# sourceMappingURL=list-product.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_products_products__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UpdateProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateProductPage = (function () {
    function UpdateProductPage(navCtrl, barcode, productsProvider, platform, api, loadingCtrl, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.barcode = barcode;
        this.productsProvider = productsProvider;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.product = this.productsProvider.product;
        this.platform = platform;
        this.navController = navCtrl;
    }
    UpdateProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateProductPage');
    };
    UpdateProductPage.prototype.readProduct = function () {
        var _this = this;
        console.log('scannig product barcode');
        this.platform.ready().then(function () {
            _this.barcode.scan().then(function (result) {
                if (!result.cancelled) {
                    _this.barcodeText = result.text;
                    _this.barcodeFormat = result.format;
                    _this.product.prd_code = Number(_this.barcodeText);
                    _this.returnProduct();
                }
            }, function (error) {
                console.log('error when scanning product barcode');
            });
        });
    };
    UpdateProductPage.prototype.updateProduct = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ spinner: 'dots' });
        loading.present();
        this.productsProvider.updateProduct(this.product).subscribe(function (res) {
            loading.dismiss();
            _this.product.prd_code = 0;
            _this.product.prd_name = '';
            _this.product.prp_price = '';
            _this.product.prp_newprice = '';
            _this.presentToast('Produto atualizado com sucesso!');
            //this.product = res.json()[0][0];  
        }, function (erro) {
            loading.dismiss();
            _this.presentToast('Erro ao atualizar o produto!');
        });
    };
    UpdateProductPage.prototype.returnProduct = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ spinner: 'dots' });
        loading.present();
        this.productsProvider.returnProductById(this.product.prd_code).subscribe(function (res) {
            loading.dismiss();
            _this.product.prd_code = 0;
            _this.product.prd_name = '';
            _this.product.prp_price = '';
            _this.product.prp_newprice = '';
            if (res.json()[0][0].st == 0) {
                _this.presentToast(res.json()[0][0].msg);
            }
            else {
                _this.product = res.json()[0][0];
            }
        }, function (erro) {
            loading.dismiss();
            _this.presentToast('Erro de acesso ao servidor');
        });
    };
    UpdateProductPage.prototype.presentToast = function (pMessage) {
        var toast = this.toast.create({ message: pMessage, duration: 3000, position: 'top' });
        toast.present();
    };
    return UpdateProductPage;
}());
UpdateProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-update-product',template:/*ion-inline-start:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\update-product\update-product.html"*/'<!--\n  Generated template for the UpdateProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Atualizar Preço</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <button ion-button block (click)="readProduct()">Ler Código</button>\n    \n      <form (ngSubmit)="updateProduct()" #formCtrl="ngForm">\n        <ion-list>\n          \n            <ion-item>\n              <ion-label color="primary" floating>Código</ion-label>\n              <ion-input type="text" [(ngModel)] = "product.prd_code" name="prd_code" [disabled]="true" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label color="primary" floating>Nome</ion-label>\n              <ion-input type="text" [(ngModel)] = "product.prd_name" name="prd_name" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label color="primary" floating>Preço Atual</ion-label>\n              <ion-input type="text" [(ngModel)] = "product.prp_price" name="prp_price" [disabled]="true" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label color="primary">Novo Preço</ion-label>\n              <ion-input type="text" [(ngModel)] = "product.prp_newprice" name="prp_newprice" placeholder="00.00" required></ion-input>\n            </ion-item>\n          \n        </ion-list>\n    \n        <button ion-button block color="secondary" [disabled]="!formCtrl.form.valid">Atualizar Preço</button>\n    \n      </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\update-product\update-product.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_2__providers_products_products__["a" /* ProductsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], UpdateProductPage);

//# sourceMappingURL=update-product.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalinvoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_invoice_invoice__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetalinvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalinvoicePage = (function () {
    function DetalinvoicePage(navCtrl, navParams, invoiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.invoiceProvider = invoiceProvider;
        this.products = [];
        this.invoice = this.invoiceProvider.invoice;
        this.invoice.nvc_code = this.navParams.get('nvc_code');
    }
    DetalinvoicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalinvoicePage');
        this.detalInvoice(this.invoice);
    };
    DetalinvoicePage.prototype.detalInvoice = function (invoice) {
        var _this = this;
        this.invoiceProvider.detalInvoice(invoice).subscribe(function (res) {
            console.log(res.json());
            _this.products = res.json()[0];
            _this.invoice = res.json()[1][0];
        }, function (error) {
        });
    };
    return DetalinvoicePage;
}());
DetalinvoicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-detalinvoice',template:/*ion-inline-start:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\detalinvoice\detalinvoice.html"*/'<!--\n  Generated template for the DetalinvoicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalhe da Venda</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p>Codigo da Nota: {{invoice.nvc_code}}</p>\n  <p>Valor Total: {{invoice.iv_valueinvoice}}</p>\n  <p>Valor Pago: {{invoice.iv_valuepaid}}</p>\n  <p>Troco: {{invoice.iv_change}}</p>\n  <p>Registro: {{invoice.iv_regdate | date:"dd/MM/yyyy HH:mm:ss"}}</p>\n\n  <ion-grid>\n    <ion-row style="background-color: #DCDCDC">\n      <ion-col col-4>\n        Código\n      </ion-col>\n      <ion-col col-5>\n        Nome\n      </ion-col>\n      <ion-col col-3>\n        Valor\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor="let product of products">\n      <ion-col col-4>\n        {{product.prd_code}}\n      </ion-col>\n      <ion-col col-5>\n        {{product.prd_name}}\n      </ion-col>\n      <ion-col col-3>\n        {{product.prp_price}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\detalinvoice\detalinvoice.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_invoice_invoice__["a" /* InvoiceProvider */]])
], DetalinvoicePage);

//# sourceMappingURL=detalinvoice.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_invoice_invoice__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detalinvoice_detalinvoice__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShoppingListPage = (function () {
    function ShoppingListPage(navCtrl, barcode, invoiceProvider, platform, api, loadingCtrl, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.barcode = barcode;
        this.invoiceProvider = invoiceProvider;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.products = [];
        this.invoice = this.invoiceProvider.invoice;
        this.begin = false;
        this.finish = false;
        this.platform = platform;
        this.navController = navCtrl;
        delete (this.invoice.nvc_code);
        delete (this.invoice.iv_valueinvoice);
        delete (this.invoice.iv_valuepaid);
        delete (this.invoice.iv_change);
        delete (this.products);
        this.begin = false;
        this.finish = false;
    }
    ShoppingListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShoppingListPage');
    };
    ShoppingListPage.prototype.generateCode = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ spinner: 'dots', content: 'Gerando códgo...' });
        loading.present();
        delete (this.invoice.nvc_code);
        delete (this.invoice.iv_valueinvoice);
        delete (this.invoice.iv_valuepaid);
        delete (this.invoice.iv_change);
        delete (this.products);
        this.begin = false;
        this.finish = false;
        this.invoiceProvider.generateCodeInvoice().subscribe(function (res) {
            loading.dismiss();
            var invoicecode = res.json()[0];
            _this.invoice.nvc_code = invoicecode[0].nvc_code;
            _this.begin = true;
            _this.msg = 'Caixa Aberto';
        }, function (error) {
            console.log('Erro: ' + error);
            loading.dismiss();
            _this.presentToast('Erro ao gerar o código');
        });
    };
    ShoppingListPage.prototype.readProduct = function () {
        var _this = this;
        console.log('scannig product barcode');
        this.platform.ready().then(function () {
            _this.barcode.scan().then(function (result) {
                if (!result.cancelled) {
                    _this.barcodeText = result.text;
                    _this.barcodeFormat = result.format;
                    _this.registerProductInvoice({ 'text': result.text, 'format': result.format });
                }
            }, function (error) {
                console.log('error when scanning product barcode');
            });
        });
    };
    ShoppingListPage.prototype.registerProductInvoice = function (data) {
        var _this = this;
        var loading = this.loadingCtrl.create({ spinner: 'dots', content: 'Registrando produto...' });
        loading.present();
        this.invoice.nvc_prd_code = Number(data.text);
        this.invoiceProvider.registerProductInvoice(this.invoice).subscribe(function (res) {
            loading.dismiss();
            if (res.json()[0][0].st == 0) {
                _this.presentToast('Produto não cadastrado!');
            }
            else {
                _this.getInvoiceById();
            }
        }, function (error) {
            loading.dismiss();
            _this.presentToast('Erro ao registrar produto!');
        });
    };
    ShoppingListPage.prototype.getInvoiceById = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ spinner: 'dots' });
        loading.present();
        this.invoiceProvider.getInvoiceById(this.invoice.nvc_code).subscribe(function (res) {
            loading.dismiss();
            _this.products = res.json()[0];
            _this.invoice.iv_valueinvoice = res.json()[1][0].valortotal;
            _this.finish = true;
        }, function (error) {
            loading.dismiss();
            _this.presentToast('Erro ao listar os produtos!');
        });
    };
    ShoppingListPage.prototype.finishInvoice = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Fechar Venda',
            subTitle: 'Valor Total: ' + this.invoice.iv_valueinvoice + '',
            inputs: [
                { name: 'iv_valuepaid', placeholder: 'Valor a pagar', type: 'text' }
            ],
            buttons: [
                { text: 'Cancelar', role: 'cancel', handler: function (data) { } },
                { text: 'Fechar Compra', handler: function (data) {
                        _this.invoice.iv_valuepaid = data.iv_valuepaid;
                        _this.invoiceProvider.finishInvoice(_this.invoice).subscribe(function (res) {
                            _this.begin = false;
                            _this.finish = false;
                            _this.invoice.iv_change = res.json()[1][0].iv_change;
                            _this.showIvchange();
                        }, function (error) {
                            console.log('Erro: ' + error);
                            _this.presentToast('Erro ao finalizar compra!');
                        });
                    } }
            ]
        });
        alert.present();
    };
    ShoppingListPage.prototype.showIvchange = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Venda Finalizada!',
            subTitle: 'Troco: ' + this.invoice.iv_change + '',
            buttons: [
                { text: 'Ok', handler: function (data) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__detalinvoice_detalinvoice__["a" /* DetalinvoicePage */], { nvc_code: _this.invoice.nvc_code });
                    } }
            ]
        });
        alert.present();
        this.msg = 'Caixa Fechado';
    };
    ShoppingListPage.prototype.insertLoose = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Produto Avulso',
            //subTitle: 'Valor Total: '+this.invoice.iv_valueinvoice+'',
            inputs: [
                { name: 'nvc_prd_name', placeholder: 'Nome do produto', type: 'text' },
                { name: 'nvc_prp_price', placeholder: '00.00', type: 'text' }
            ],
            buttons: [
                { text: 'Cancelar', role: 'cancel', handler: function (data) { } },
                { text: 'Inserir', handler: function (data) {
                        var nvc_prp_price = data.nvc_prp_price.replace(',', '.');
                        _this.invoice.nvc_prd_name = data.nvc_prd_name;
                        _this.invoice.nvc_prp_price = nvc_prp_price;
                        _this.invoiceProvider.insertLoose(_this.invoice).subscribe(function (res) {
                            _this.getInvoiceById();
                        }, function (error) {
                            console.log('Erro: ' + error);
                            _this.presentToast('Erro ao inserir produto!');
                        });
                    } }
            ]
        });
        alert.present();
    };
    ShoppingListPage.prototype.removeProductInvoice = function (product) {
        var _this = this;
        console.log(product.nvc_id, this.invoice.nvc_code);
        this.invoiceProvider.removeProductInvoice(product.nvc_id, this.invoice.nvc_code).subscribe(function (res) {
            _this.getInvoiceById();
        }, function (error) {
        });
    };
    ShoppingListPage.prototype.presentToast = function (pMessage) {
        var toast = this.toast.create({ message: pMessage, duration: 3000, position: 'top' });
        toast.present();
    };
    return ShoppingListPage;
}());
ShoppingListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-shopping-list',template:/*ion-inline-start:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\shopping-list\shopping-list.html"*/'<!--\n  Generated template for the ShoppingListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nova Venda</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button small color="secondary" [disabled]="begin" (click)="generateCode()">Iniciar</button>\n  <button ion-button small color="danger" [disabled]="!finish" (click)="finishInvoice()">Encerrar</button>\n  <button ion-button small color="light" [disabled]="!begin" (click)="insertLoose()">Avulso</button>\n  <button ion-button block (click)="readProduct()" [disabled]="!begin">Ler Código</button>  \n\n    Nota Fiscal: {{invoice.nvc_code}}<br/>\n    Total: {{invoice.iv_valueinvoice}}<br/>\n    Troco: {{invoice.iv_change}}<br/>\n    Aviso: {{msg}}<br/>\n    \n    <ion-grid>\n      <ion-row style="background-color: #DCDCDC">\n        <ion-col col-4>\n          Código\n        </ion-col>\n        <ion-col col-4>\n          Nome\n        </ion-col>\n        <ion-col col-3>\n          Valor\n        </ion-col>\n        <ion-col col-1>          \n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor="let product of products">\n        <ion-col col-4>\n          {{product.prd_code}}\n        </ion-col>\n        <ion-col col-4>\n          {{product.prd_name}}\n        </ion-col>\n        <ion-col col-3>\n          {{product.prp_price}}\n        </ion-col>\n        <ion-col col-1>            \n          <button (click)="removeProductInvoice(product)">X</button>          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\shopping-list\shopping-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_0__providers_invoice_invoice__["a" /* InvoiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
], ShoppingListPage);

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_products_products__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, barcode, productsProvider, platform, api, loadingCtrl, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.barcode = barcode;
        this.productsProvider = productsProvider;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.product = this.productsProvider.product;
        this.platform = platform;
        this.navController = navCtrl;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.readProduct = function () {
        var _this = this;
        console.log('scannig product barcode');
        this.platform.ready().then(function () {
            _this.barcode.scan().then(function (result) {
                if (!result.cancelled) {
                    _this.barcodeText = result.text;
                    _this.barcodeFormat = result.format;
                    _this.product.prd_code = Number(_this.barcodeText);
                    _this.verifyProductById();
                }
            }, function (error) {
                console.log('error when scanning product barcode');
            });
        });
    };
    RegisterPage.prototype.saveProduct = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ spinner: 'dots' });
        loading.present();
        this.productsProvider.registerProduct(this.product).subscribe(function (res) {
            _this.product.prd_code = 0;
            _this.product.prd_name = '';
            _this.product.prp_price = '';
            _this.product.cat_id = 1;
            loading.dismiss();
            _this.presentToast('Produto cadatrado com sucesso!');
        }, function (error) {
            loading.dismiss();
            _this.presentToast('Erro ao cadastrar o produto!');
        });
    };
    RegisterPage.prototype.verifyProductById = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ spinner: 'dots' });
        loading.present();
        this.productsProvider.verifyProductById(this.product.prd_code).subscribe(function (res) {
            loading.dismiss();
            if (res.json()[0][0].st == 1) {
                _this.presentToast('Produto já cadastrado!');
            }
        }, function (erro) {
            loading.dismiss();
            _this.presentToast('Erro de acesso ao servidor');
        });
    };
    RegisterPage.prototype.presentToast = function (pMessage) {
        var toast = this.toast.create({ message: pMessage, duration: 3000, position: 'top' });
        toast.present();
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register',template:/*ion-inline-start:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Cadastro de Produtos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <button ion-button block (click)="readProduct()">Ler Código</button>\n\n  <form (ngSubmit)="saveProduct()" #formCtrl="ngForm">\n    <ion-list>\n      \n        <ion-item>\n          <ion-label color="primary" floating>Código</ion-label>\n          <ion-input type="text" [(ngModel)] = "product.prd_code" name="prd_code" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color="primary" floating>Nome</ion-label>\n          <ion-input type="text" [(ngModel)] = "product.prd_name" name="prd_name" required></ion-input>\n        </ion-item>        \n        <ion-item>\n          <ion-label color="primary">Novo Preço</ion-label>\n          <ion-input type="text" [(ngModel)] = "product.prp_price" name="prp_price" placeholder="00.00" required></ion-input>\n        </ion-item>\n      \n    </ion-list>\n\n    <button ion-button block color="secondary" [disabled]="!formCtrl.form.valid">Cadastrar Produto</button>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projects\JavaScript\Ionic2Nodejs\ProjectTioLino\AppTioLino\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_2__providers_products_products__["a" /* ProductsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map