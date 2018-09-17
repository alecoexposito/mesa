import {Product} from "./Product";
import {WarehouseProduct} from "./WarehouseProduct";
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {WorkPeriod} from "./WorkPeriod";

@Entity('sale')
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Product, product => product.sales)
  product: Product;

  @Column()
  ammount: number;

  @ManyToOne(type => WarehouseProduct, warehouseProduct => warehouseProduct.sales)
  warehouseProduct: WarehouseProduct;

  @ManyToOne(type => WorkPeriod, workPeriod => workPeriod.sales)
  workPeriod: WorkPeriod;
}
