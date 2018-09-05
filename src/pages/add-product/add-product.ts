import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Product} from "../../entities/Product";
import {MyApp} from "../../app/app.component";
import {ProductDataProvider} from "../../providers/product-data/product-data";
import {getRepository, Repository} from "typeorm";
import {Camera, CameraOptions} from "@ionic-native/camera";

/**
 * Generated class for the AddProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {

  @ViewChild('name') name;
  @ViewChild('ammount') ammount;
  @ViewChild('price') price;
  @ViewChild('measureUnit') measureUnit;

  public myApp: MyApp;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  getImage() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, public productData: ProductDataProvider, public camera: Camera) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductPage');
  }

  async saveProduct() {

    let p = new Product();
    p.name = this.name.value;
    p.price = this.price.value;
    p.measureUnit = this.measureUnit.value;

    const productRepository = getRepository('product') as Repository<Product>;
    await productRepository.save(p);
    console.log("product saved", p);

    // let p = new Product();
    // p.name = this.name.value;
    // p.ammount = this.ammount.value;
    // p.price = this.price.value;
    // this.productData.products.push(p);
    // console.log(this.productData.getProducts());

    // console.log("Products", this.myApp.productList);
  }
}
