import {Product} from "./Product";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {WarehouseProduct} from "./WarehouseProduct";

@Entity('wharehouse')
export class Warehouse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => WarehouseProduct, warehouseProduct => warehouseProduct.warehouse)
  warehouseProducts: WarehouseProduct[];
}
