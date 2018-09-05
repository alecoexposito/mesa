import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListSalesPage } from './list-sales';

@NgModule({
  declarations: [
    ListSalesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListSalesPage),
  ],
})
export class ListSalesPageModule {}
