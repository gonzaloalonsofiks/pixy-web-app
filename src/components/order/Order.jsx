import React from 'react'
import {useCartContext} from "../../contexts/cartContext"
import "./Order.css"
import success from "../../img/completed.png"

function Order() {

  const {orderID} = useCartContext();

  return (
    <div className="container">
      <div className="order-container">

      <h1 className="order-title">¡Gracias!</h1>
      <h3 className="order-subtitle">Tu orden fue recibida.</h3>
      <img className="order-img" src={success} alt="Confirmación de orden" />


      <p className="order-text">Hemos recibido tu orden con el código <span className="order-id">{orderID}</span></p>
      </div>
    </div>
  )
}

export default Order