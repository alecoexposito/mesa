import { Injectable } from '@angular/core';
import {Sale} from "../../entities/Sale";
import {getRepository, Repository} from "typeorm";
import {Product} from "../../entities/Product";

/*
  Generated class for the SaleDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SaleDataProvider {

  public saleRepository;
  sales: Sale[] = [];

  constructor() {
    console.log('Hello SaleDataProvider Provider');
    this.saleRepository = getRepository('sale') as Repository<Sale>;
  }

}
