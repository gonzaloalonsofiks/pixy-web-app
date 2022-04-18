import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/cartContext";
import "./BuyerForm.css";

function BuyerForm() {
  const { dataForm, handleChange, createOrder } = useCartContext();

  return (
    <>
      <p>Completá todos los datos para finalizar tu pedido.</p>
      <form onSubmit={createOrder}>
        <fieldset>
          <input
            required
            type="text"
            name="fname"
            placeholder="Nombre"
            value={dataForm.fname}
            onChange={handleChange}
          ></input>

          <input
            type="text"
            name="lname"
            placeholder="Apellido"
            value={dataForm.lname}
            onChange={handleChange}
          ></input>
        </fieldset>
        <fieldset>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={dataForm.email}
            onChange={handleChange}
          ></input>

          <input
            type="email"
            name="email-validation"
            placeholder="Repetir email"
          ></input>
        </fieldset>
        <fieldset>
          <input
            type="text"
            name="cellphone"
            placeholder="Teléfono"
            value={dataForm.cellphone}
            onChange={handleChange}
          ></input>
        </fieldset>

        <button className="btn">Finalizar compra</button>
        {/* <Link to="/order">
          <button>Ver detalles de la orden</button>
        </Link> */}
      </form>
    </>
  );
}

export default BuyerForm;
