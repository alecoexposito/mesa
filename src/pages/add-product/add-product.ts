import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Product} from "../../entities/Product";
import {MyApp} from "../../app/app.component";
import {ProductDataProvider} from "../../providers/product-data/product-data";
import {getRepository, Repository} from "typeorm";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {ImagePicker} from "@ionic-native/image-picker";
import {Crop} from "@ionic-native/crop";

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
  photo: string;

  public myApp: MyApp;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  reduceImage(selected_pictures: any) : any{
    return selected_pictures.reduce((promise:any, item:any) => {
      return promise.then((result) => {
        return this.cropService.crop(item, {quality: 75})
          .then(cropped_image => this.photo = cropped_image);
      });
    }, Promise.resolve());
  }

  getImage() {
    let options= {
      maximumImagesCount: 1,
    }
    // this.photo = new Array<string>();
    this.imagePicker.getPictures(options)
      .then((results) => {
        this.reduceImage(results).then(() => {
          console.log('all images cropped!!');
        });
      }, (err) => { console.log(err) });

    // this.camera.getPicture(this.options).then((imageData) => {
    //   // imageData is either a base64 encoded string or a file URI
    //   // If it's base64 (DATA_URL):
    //   let base64Image = 'data:image/jpeg;base64,' + imageData;
    // }, (err) => {
    //   // Handle error
    // });
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, public productData: ProductDataProvider, public camera: Camera, public imagePicker: ImagePicker, public cropService: Crop) {

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
