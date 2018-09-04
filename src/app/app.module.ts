import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AddProductPage} from "../pages/add-product/add-product";
import { ProductDataProvider } from '../providers/product-data/product-data';
import {ListProductsPage} from "../pages/list-products/list-products";
import { SaleDataProvider } from '../providers/sale-data/sale-data';
import {ListSalesPage} from "../pages/list-sales/list-sales";
import {SalesPopoverPage} from "../pages/sales-popover/sales-popover";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddProductPage,
    ListProductsPage,
    ListSalesPage,
    SalesPopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddProductPage,
    ListProductsPage,
    ListSalesPage,
    SalesPopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductDataProvider,
    SaleDataProvider,
  ]
})
export class AppModule {}
