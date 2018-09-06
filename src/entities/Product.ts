import {ProductCategory} from "./ProductCategory";
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {WarehouseProduct} from "./WarehouseProduct";
import {Sale} from "./Sale";

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  measureUnit: string;

  @ManyToOne(type => ProductCategory, category => category.products)
  category: ProductCategory;

  @OneToMany(type => WarehouseProduct, warehouseProduct => warehouseProduct.warehouse)
  warehouseProducts: WarehouseProduct[];

  @OneToMany(type => Sale, sale => sale.product)
  sales: Sale[];

}
