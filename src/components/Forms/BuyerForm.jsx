import React from "react";
import { useCartContext } from "../../contexts/cartContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./BuyerForm.css";

function BuyerForm() {
  const { dataForm, handleChange, createOrder, emptyCart } = useCartContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createOrder(data);
    navigate(`/order`);
    emptyCart();
  };

  return (
    <>
      <p>Completá todos los datos para finalizar tu pedido.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            {...register("fname", {
              required: "Este campo es necesario",
              minLength: 2,
            })}
            placeholder="Nombre"
            value={dataForm.fname}
            onChange={handleChange}
          ></input>
          <p className="alert-message">{errors.fname?.message}</p>

          <input
            type="text"
            {...register("lname", {
              required: "Este campo es necesario",
              minLength: 2,
            })}
            placeholder="Apellido"
            value={dataForm.lname}
            onChange={handleChange}
          ></input>
          <p className="alert-message">{errors.lname?.message}</p>
        </div>
        <div>
          <input
            type="email"
            {...register("email", {
              required: "Este campo es necesario",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Ingresá un email válido",
              },
            })}
            placeholder="Email"
            value={dataForm.email}
            onChange={handleChange}
          ></input>
          <p className="alert-message">{errors.email?.message}</p>
        </div>
        <div>
          <input
            type="text"
            {...register("cellphone", {
              required: "Este campo es necesario",
              minLength: 9,
            })}
            placeholder="Teléfono"
            value={dataForm.cellphone}
            onChange={handleChange}
          ></input>
          <p className="alert-message">{errors.email?.message}</p>
        </div>

        <button className="btn">Finalizar compra</button>
      </form>
    </>
  );
}

export default BuyerForm;
