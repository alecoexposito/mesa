import { Injectable } from '@angular/core';
import {Sale} from "../../entities/Sale";

/*
  Generated class for the SaleDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SaleDataProvider {

  sales: Sale[] = [];

  constructor() {
    console.log('Hello SaleDataProvider Provider');
  }

}
