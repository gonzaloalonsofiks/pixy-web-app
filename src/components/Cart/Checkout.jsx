import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/thank-you">
          <button>Ver detalles de mi orden</button>
        </Link>
      </form>
    </div>
  );
}

export default Checkout;
