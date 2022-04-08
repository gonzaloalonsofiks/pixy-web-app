import React from "react";
import BuyerForm from "../Forms/BuyerForm";
import { useCartContext } from "../../contexts/cartContext";

function Checkout() {
  const { createOrder, redirection} = useCartContext();
  return (
    <div>
      <BuyerForm />
    </div>
  );
}

export default Checkout;
