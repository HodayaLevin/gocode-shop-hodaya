import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import type IProductCart from "../types/IProductCart";
import type IProduct from "../types/Product";

export const useProductCart = defineStore("useProductCart", () => {
  const count = ref(0);
  const productCart = reactive<Array<IProductCart>>([]);
  const productCart1 = reactive<IProductCart>;
  function add(product: IProduct) {
    const inex = productCart.findIndex((item) => item.product.id == product.id);
    if (inex > -1) productCart[inex].count++;
    else productCart.push({ product: product, count: 1 } as IProductCart);
  }
  function remove(product: IProduct) {
    const inex = productCart.findIndex((item) => item.product.id == product.id);
    if (inex > -1) {
      if (productCart[inex].count > 1) productCart[inex].count--;
      else productCart.splice(inex, 1);
    }
  }

  return { count, productCart, add, remove };
});

