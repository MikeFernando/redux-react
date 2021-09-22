import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import api from "../services/api";
import addProductToCart from "../store/modules/cart/action";

import { IProduct } from "../store/modules/cart/types";

import '../styles/catalog.css';
import { Cart } from "./Cart";

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
      <h1>Catálogo</h1>

      <div className="products">
        {catalog.map(product => (
          <article key={product.id} className="products">
            <span>{product.title}</span> {" - "}
            <span>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(product.price)}</span> {"  "}

            <button
              type="button"
              className="add-button"
              onClick={() => handleAddProductToCart(product)}
            >
              Comprar
            </button>
          </article>
        ))}
      </div>

      <Cart />
    </main>
  )
}
