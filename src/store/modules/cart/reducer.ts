import produce from "immer";
import { Reducer } from "redux";

import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: []
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_SUCCESS": {
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
      case "ADD_PRODUCT_TO_FAILURE": {
        console.log('failure', action.payload);
        break;
      }
      default:
        return state;
    }
  });
}

export default cart;