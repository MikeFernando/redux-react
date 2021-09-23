import { all, takeLatest, select } from "redux-saga/effects";
import { IState } from "../..";
import addProductToCart from "./action";

type checkProductStockProps = ReturnType<typeof addProductToCart>

function* checkProductStock({ payload }: checkProductStockProps) {
  const { product } = payload;

  const currentyQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  });

  console.log(currentyQuantity);
  console.log("Adicionou ao carrinho");
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)
]);