import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {ProductDataProvider} from "../../providers/product-data/product-data";
import {Sale} from "../../entities/Sale";
import {SaleDataProvider} from "../../providers/sale-data/sale-data";
import {Product} from "../../entities/Product";
import {getRepository, Repository} from "typeorm";
import {WorkPeriodDataProvider} from "../../providers/work-period-data/work-period-data";
import {WorkPeriod} from "../../entities/WorkPeriod";

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
  public workPeriod: WorkPeriod;
  workPeriodRepository = getRepository('work_period') as Repository<WorkPeriod>;
  saleRepository = getRepository('sale') as Repository<Sale>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public productData: ProductDataProvider, public toastController: ToastController,
              public saleData: SaleDataProvider, private workPeriodData: WorkPeriodDataProvider) {
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
    sale.workPeriod = this.workPeriod;
    this.saleRepository.save(sale).then(result => {
      console.log(result);
      this.saleData.sales.push(sale);
    });

  }

  getCurrentWorkPeriod() {
    this.workPeriodData.getCurrentWorkPeriod().then(result => {
      this.workPeriod = result;
      console.log(this.workPeriod)
    });
  }

  async openWorkPeriod() {
    let workPeriod = new WorkPeriod();
    //workPeriod.startedAt = new Date();
    const workPeriodRepository = getRepository('work_period') as Repository<WorkPeriod>;
    await workPeriodRepository.save(workPeriod);
  }

  async closeWP() {
    this.workPeriod.status = WorkPeriod.STATUS_CLOSED;
    console.log(this.workPeriod);
    const workPeriodRepository = getRepository('work_period') as Repository<WorkPeriod>;
    await workPeriodRepository.save(this.workPeriod);
  }
}
