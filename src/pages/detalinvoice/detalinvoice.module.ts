import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalinvoicePage } from './detalinvoice';

@NgModule({
  declarations: [
    DetalinvoicePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalinvoicePage),
  ],
})
export class DetalinvoicePageModule {}
