import {Warehouse} from "./Warehouse";
import {Product} from "./Product";
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ProductCategory} from "./ProductCategory";
import {Sale} from "./Sale";

@Entity('warehouse_product')
export class WarehouseProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ammount: number;

  @ManyToOne(type => Warehouse, warehouse => warehouse.warehouseProducts)
  warehouse: Warehouse;

  @ManyToOne(type => Product, product => product.warehouseProducts)
  product: Product;

  @OneToMany(type => Sale, sale => sale.warehouseProduct)
  sales: Sale[];
}
