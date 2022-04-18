import React from "react";
import BuyerForm from "../Forms/BuyerForm";
import { useCartContext } from "../../contexts/cartContext";

function Checkout() {
  const { createOrder, redirection } = useCartContext();
  return (
    <div className="checkout-container">
      <h1>Finalizá tu compra</h1>
      <div id="checkout-form">
        <BuyerForm />
      </div>
    </div>
  );
}

export default Checkout;
