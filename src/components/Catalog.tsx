import { useEffect, useState } from "react";

import api from "../services/api";

import { IProduct } from "../store/modules/cart/types";

import '../styles/catalog.css';
import { Cart } from "./Cart";
import { CatalogItem } from "./CatalogItem";

export const Catalog = () => {
  const [ catalog, setCatalog ] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('/products').then(response => setCatalog(response.data));
  }, []);

  return (
    <main className="container">
      <h1>Catálogo</h1>

      <div className="products">
        {catalog.map(product => (
          <CatalogItem key={product.id} product={product} />
        ))}
      </div>

      <Cart />
    </main>
  )
}
