import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../store";

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

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.outStock.includes(product.id);
  })

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

      { hasFailedStockCheck && <span className="failed-stock">Falta de estoque</span> }
    </article>
  )
}
