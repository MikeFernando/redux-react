import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import api from "../../../services/api";
import { IState } from "../..";
import { addProductToFailure, addProductToSuccess } from "./action";

type checkProductStockProps = ReturnType<typeof addProductToSuccess>;

interface StockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: checkProductStockProps) {
  const { product } = payload;

  const currentyQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  });

  const availableStockResponse: AxiosResponse<StockResponse> = 
    yield call(api.get, `stock/${product.id}`);

  if (availableStockResponse.data.quantity > currentyQuantity) {
    yield put(addProductToSuccess(product))
  } else {
    yield put(addProductToFailure(product.id));
  }
}

export default all([
  takeLatest('ADD_PRODUCT_TO_REQUEST', checkProductStock)
]);