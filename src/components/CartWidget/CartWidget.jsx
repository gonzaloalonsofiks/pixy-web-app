import React from 'react'
import shoppingCart from '../../img/shopping-cart.png';
import { useCartContext } from "../../contexts/cartContext"
import './CartWidget.css'

export default function CartWidget() {

  const {totalItems} = useCartContext()

  return (
    <div>
        <div className="shoppingCart-container">
            <img src={shoppingCart} className="shoppingCart-icon" alt="Ícono del carrito de compras" />
            <p>{totalItems()}</p>
        </div>
    </div>
  )
}
