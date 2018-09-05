import {Product} from "./Product";
import {WarehouseProduct} from "./WarehouseProduct";

export class Sale {
  id: number;
  product: Product;
  ammount: number;
  warehouseProduct: WarehouseProduct;
}
