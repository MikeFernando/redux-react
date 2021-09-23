import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "./modules/rootReducer";

import { ICartState } from "./modules/cart/types";
import rootSaga from "./modules/rootSaga";

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [ sagaMiddleware ]

const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;