import React from 'react'
import shoppingCart from '../../img/shopping-cart.png';
import './CartWidget.css'

export default function CartWidget() {
  return (
    <div>
        <div className="shoppingCart-container">
            <img src={shoppingCart} className="shoppingCart-icon" alt="Ícono del carrito de compras" />
            <p>$ 0,00</p>
        </div>
    </div>
  )
}
