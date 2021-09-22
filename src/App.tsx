import { Provider } from "react-redux";

import store from "./store";
import { Catalog } from "./components/Catalog";
import { Cart } from "./components/Cart";

import './styles/global.css';

export function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
}

