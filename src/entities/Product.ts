import {ProductCategory} from "./ProductCategory";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
  // @Column()
  // category: ProductCategory;
}
