import type IProduct from "./Product";

export default interface IProductCart {
  product: IProduct;
  count: number;
}
