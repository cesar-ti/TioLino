import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterQtdProductPage } from './register-qtd-product';

@NgModule({
  declarations: [
    RegisterQtdProductPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterQtdProductPage),
  ],
})
export class RegisterQtdProductPageModule {}
