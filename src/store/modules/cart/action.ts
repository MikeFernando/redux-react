import { IProduct } from "./types";

function addProductToCart(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product
    },
  }
}

export default addProductToCart;