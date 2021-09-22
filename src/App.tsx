import { Provider } from "react-redux";

import store from "./store";
import { Catalog } from "./components/Catalog";

import './styles/global.css';

export function App() {
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
}

