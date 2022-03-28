import { useCartContext } from "../../contexts/cartContext";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import "./Cart.css";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";

function Cart() {
  const { cartList, emptyCart, subtotal, removeItem, totalCart } =
    useCartContext();

  if (cartList.length === 0) {
    return (
      <>
        <p>Tu carrito está vacío. ¿Elegimos algunos prodcutos?</p>
        <Link to="/">Ir al Inicio</Link>
      </>
    );
  } else {
    return (
      <div>
        <h1>Carrito</h1>
        <p>Revisá tu orden de compra antes de continuar.</p>

        <div className="cartList-container">
          <table className="cartList-table" border="2">
            <thead>
              <tr>
                <th className="cartList-headings"></th>
                <th className="cartList-headings">Cant.</th>
                <th className="cartList-headings">Servicio</th>
                <th className="cartList-headings">Precio Unit.</th>
                <th className="cartList-headings">Subtotal</th>
              </tr>
            </thead>

            {cartList.map((item) => (
              <tr className="cartList-row" key={item.id}>
                <td>
                  <span
                    className="cartList-remove"
                    onClick={() => removeItem(item.id)}
                  >
                    <AiFillDelete />{" "}
                  </span>
                </td>
                <td>{item.cantidad}</td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <td>$ {subtotal(item.cantidad, item.price)}</td>
              </tr>
            ))}
          </table>
          <div>Total: $ {totalCart()}</div>
        </div>
        <div>
          <div className="primary-cta">Terminar mi compra</div>
          <div className="secondary-cta" onClick={emptyCart}>
            Vaciar carrito
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
