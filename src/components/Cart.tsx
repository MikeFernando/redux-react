import { useSelector } from "react-redux";

import { IState } from "../store";
import { ICartItem } from "../store/modules/cart/types";

import '../styles/cart.css';

export function Cart() {
  const state = useSelector<IState, ICartItem[]>(state => state.cart.items);

  console.log(state);

  return (
    <table>
       <thead>
         <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Total</th>
         </tr>
        </thead>
      <tbody>
        {state.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(item.product.price)}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
