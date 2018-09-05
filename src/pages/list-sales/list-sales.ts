import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {SaleDataProvider} from "../../providers/sale-data/sale-data";
import {SalesPopoverPage} from "../sales-popover/sales-popover";

/**
 * Generated class for the ListSalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-sales',
  templateUrl: 'list-sales.html',
})
export class ListSalesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public saleData: SaleDataProvider, public popoverController: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListSalesPage');
  }

  getSales() {
    return this.saleData.sales;
  }

  presentPopover(event: Event) {
    let popover = this.popoverController.create(SalesPopoverPage);
    popover.present({ ev: event });
  }
}
