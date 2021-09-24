import { IProduct, ActionsType } from "./types";

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionsType.addProductToCartRequest,
    payload: {
      product
    },
  }
}
export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionsType.addProductToCartSuccess,
    payload: {
      product
    },
  }
}
export function addProductToCartFailure(productId: number) {
  return {
    type: ActionsType.addProductToCartFailure,
    payload: {
      productId
    },
  }
}