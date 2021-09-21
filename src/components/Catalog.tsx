import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import api from "../services/api";
import addProductToCart from "../store/modules/cart/action";

import { IProduct } from "../store/modules/cart/types";

import '../styles/catalog.css';

export const Catalog = () => {
  const dispatch = useDispatch()
  const [ catalog, setCatalog ] = useState<IProduct[]>([]);

  const handleAddProductToCart = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product))
  }, [dispatch]);

  useEffect(() => {
    api.get('/products').then(response => setCatalog(response.data));
  }, []);

  return (
    <main className="container">
      <h1>Catalog</h1>

      {catalog.map(product => (
        <article key={product.id} className="products">
          <span>{product.title}</span> {" - "}
          <span>{product.price}</span> {"  "}

          <button
            type="button"
            className="add-button"
            onClick={() => handleAddProductToCart(product)}
          >
            Comprar
          </button>
        </article>
      ))}
    </main>
  )
}
