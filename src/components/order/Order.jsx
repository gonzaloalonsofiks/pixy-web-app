import React from 'react'
import {useCartContext} from "../../contexts/cartContext"

function Order() {

  const {orderID} = useCartContext();

  return (
    <div>
      <h1>Tu orden ha sido recibida</h1>

      <p>Hemos recibido tu orden con el número {orderID}</p>
    </div>
  )
}

export default Order