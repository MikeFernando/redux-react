import produce from "immer";
import { Reducer } from "redux";

import { ActionsType, ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
  outStock: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionsType.addProductToCartSuccess: {
        const { product } = action.payload;
        
        const productInCartIndex = state.items.findIndex(item => 
          item.product.id === product.id  
        )
        
        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity += 1
        } else {
          draft.items.push({
            product,
            quantity: 1
          })
        }
        break;
      }
      case ActionsType.addProductToCartFailure: {
        draft.outStock.push(action.payload.productId);
        break;
      }
      default:
        return state;
    }
  });
}

export default cart;