import { IProduct } from "./types";

export function addProductToRequest(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_REQUEST',
    payload: {
      product
    },
  }
}
export function addProductToSuccess(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_SUCCESS',
    payload: {
      product
    },
  }
}
export function addProductToFailure(productId: number) {
  return {
    type: 'ADD_PRODUCT_TO_FAILURE',
    payload: {
      productId
    },
  }
}