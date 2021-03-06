import {Component, Injectable} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {createConnection} from "typeorm";
import {Product} from "../entities/Product";
import {WarehouseProduct} from "../entities/WarehouseProduct";
import {Warehouse} from "../entities/Warehouse";
import {Sale} from "../entities/Sale";
import {ProductCategory} from "../entities/ProductCategory";
import {WorkPeriod} from "../entities/WorkPeriod";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(async () => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // Depending on the machine the app is running on, configure
      // different database connections
      if(platform.is('cordova')) {
        // Running on device or emulator
        await createConnection({
          type: 'cordova',
          database: 'mesa',
          location: 'default',
          logging: ['error', 'query', 'schema'],
          synchronize: true,
          entities: [
            Product,
            ProductCategory,
            Sale,
            Warehouse,
            WarehouseProduct,
            WorkPeriod
          ]
        });
      } else {
        // Running app in browser
        await createConnection({
          type: 'sqljs',
          autoSave: true,
          location: 'browser',
          logging: ['error', 'query', 'schema'],
          synchronize: true,
          entities: [
            Product,
            ProductCategory,
            Sale,
            Warehouse,
            WarehouseProduct,
            WorkPeriod
          ]
        });
      }

    });
  }
}
