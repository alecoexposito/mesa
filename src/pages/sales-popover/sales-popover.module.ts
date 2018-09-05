import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalesPopoverPage } from './sales-popover';

@NgModule({
  declarations: [
    SalesPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(SalesPopoverPage),
  ],
})
export class SalesPopoverPageModule {}
