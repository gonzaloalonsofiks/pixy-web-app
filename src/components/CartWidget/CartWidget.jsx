import React from "react";
import shoppingCart from "../../img/shopping-cart.png";
import { useCartContext } from "../../contexts/cartContext";
import "./CartWidget.css";

export default function CartWidget() {
  const { totalItems, cartList } = useCartContext();

  return (
    <div>
      <div className="shoppingCart-container">
        {cartList.length === 0 ? (
          <img
            src={shoppingCart}
            className="shoppingCart-icon"
            alt="Ícono del carrito de compras"
          />
        ) : (
          <div className="shoppingCart-full">
            <img
              src={shoppingCart}
              className="shoppingCart-icon"
              alt="Ícono del carrito de compras"
            />
            <p className="shoppingCart-number">{totalItems()}</p>
          </div>
        )}
      </div>
    </div>
  );
}
