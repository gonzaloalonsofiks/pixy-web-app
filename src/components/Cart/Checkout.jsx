import React from "react";
import { useCartContext } from "../../contexts/cartContext";

function Checkout() {
  const { dataForm, handleChange, createOrder } = useCartContext();
  return (
    <div>
      <form onSubmit={createOrder}>
        <input
          type="text"
          name="fname"
          placeholder="Nombre"
          value={dataForm.fname}
          onChange={handleChange}
        ></input>

        <br />

        <input
          type="text"
          name="lname"
          placeholder="Apellido"
          value={dataForm.lname}
          onChange={handleChange}
        ></input>

        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={dataForm.email}
          onChange={handleChange}
        ></input>

        <br />

        <input
          type="email"
          name="email-validation"
          placeholder="Repetir email"
          /*           value={dataForm.email}
          onChange={handleChange} */
        ></input>

        <br />

        <input
          type="text"
          name="cellphone"
          placeholder="Teléfono"
          value={dataForm.cellphone}
          onChange={handleChange}
        ></input>

        <br />

        <button>Finalizar compra</button>
      </form>
    </div>
  );
}

export default Checkout;
