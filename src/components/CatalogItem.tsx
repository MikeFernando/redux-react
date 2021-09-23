import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { addProductToRequest } from "../store/modules/cart/action";
import { IProduct } from "../store/modules/cart/types";

interface CatalogItemProps {
  product: IProduct;
}

export function CatalogItem({ product }: CatalogItemProps) {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToRequest(product))
  }, [dispatch, product]);

  return (
    <article className="products">
      <span>{product.title}</span> {" - "}
      <span>{new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(product.price)}</span> {"  "}

      <button
        type="button"
        className="add-button"
        onClick={() => handleAddProductToCart()}
      >
        Comprar
      </button>
    </article>
  )
}
