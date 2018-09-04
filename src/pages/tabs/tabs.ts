import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {AddProductPage} from "../add-product/add-product";
import {ListProductsPage} from "../list-products/list-products";
import {ListSalesPage} from "../list-sales/list-sales";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ListProductsPage;
  tab4Root = AddProductPage;
  tab5Root = ListSalesPage;

  constructor() {

  }
}
