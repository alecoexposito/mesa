import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {ProductDataProvider} from "../../providers/product-data/product-data";
import {Sale} from "../../entities/Sale";
import {SaleDataProvider} from "../../providers/sale-data/sale-data";
import {Product} from "../../entities/Product";
import {getRepository, Repository} from "typeorm";

/**
 * Generated class for the ListProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-products',
  templateUrl: 'list-products.html',
})
export class ListProductsPage {

  public products: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public productData: ProductDataProvider, public toastController: ToastController,
              public saleData: SaleDataProvider) {
    this.getProducts(null);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListProductsPage');
  }

  getProducts(refresher) {
    this.productData.getProducts().then(result => {
      this.products = result;
      if(refresher != null)
        refresher.complete();
    });
  }

  cardClick(product) {
    this.saleProduct(product, 1);
    const toast = this.toastController.create({
      message: 'Producto vendido',
      duration: 1000
    });
    toast.present();
  }

  saleProduct(product, ammount) {
    let sale = new Sale();
    sale.product = product;
    sale.ammount = ammount;
    this.saleData.sales.push(sale);
  }
}
