import { Injectable } from '@angular/core';
import {Product} from "../../entities/Product";
import {getRepository, Repository} from "typeorm";

/*
  Generated class for the ProductDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductDataProvider {

  public productRepository;
  products: Product[] = [];

  constructor() {
    console.log('Hello ProductDataProvider Provider');
    this.productRepository = getRepository('product') as Repository<Product>;

  }

  getProducts() {
    return this.productRepository.find();
  }

}
