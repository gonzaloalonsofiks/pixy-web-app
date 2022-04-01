import React from 'react'
import {useCartContext} from "../../contexts/cartContext"

function Order() {

  const {dataForm} = useCartContext();

  return (
    <div>
      <h1>` Tu orden ha sido recibida</h1>

      <p>Hemos recibido tu orden con el número XXX</p>
    </div>
  )
}

export default Order