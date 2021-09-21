import { IProduct } from "./types";

function addProductToCart(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    product,
  }
}

export default addProductToCart;