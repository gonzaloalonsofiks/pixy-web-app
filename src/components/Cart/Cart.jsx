import { useCartContext } from "../../contexts/cartContext";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import emptyCartImg from "../../img/empty-cart.png";
import Checkout from "./Checkout";
import "./Cart.css";

function Cart() {
  const { cartList, emptyCart, subtotal, removeItem, totalCart, handleDecrement, handleIncrement } =
    useCartContext();

  if (cartList.length === 0) {
    return (
      <div className="container cart-container">
        <h2>Carrito</h2>
        <img
          className="cart-empty-img"
          src={emptyCartImg}
          alt="Tu carrito está vacío"
        />
        <p>Tu carrito está vacío. ¿Qué tal si agregás algo?</p>
        <Link className="btn" to="/">
          Ir al Inicio
        </Link>
      </div>
    );
  } else {
    return (
      <div className="container cart-container">
        <h1>Carrito</h1>
        <p>Revisá tu orden de compra antes de continuar.</p>

        <div className="cartList-container">
          <div className="cartList-column-label">
            <label className="service-label-icon">Icon</label>
            <label className="service-label-name">Servicio</label>
            <label className="service-label-price">Precio</label>
            <label className="service-label-quantity">Cantidad</label>
            <label className="service-label-removal">Remove</label>
            <label className="service-label-total">Total</label>
          </div>

          <div className="services">
            {cartList.map((item) => (
              <div className="service" key={item.id}>
                <div className="service-cart-icon">
                  <img className="service-icon-img" src={item.icon} />
                </div>
                <div className="service-cart-name">{item.name}</div>
                <div className="service-cart-price">$ {item.price}</div>
                <div className="service-cart-quantity quantity-group">
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                </div>
                <div className="service-cart-removal">
                  <span
                    className="cartList-remove"
                    onClick={() => removeItem(item.id)}
                  >
                    <AiFillDelete />{" "}
                  </span>
                </div>
                <div className="service-label-total">
                  $ {subtotal(item.quantity, item.price)}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-totals">
            <div className="cart-totals-display">
              <p>Total</p>
              <span>${totalCart()} </span>
            </div>
          </div>

          <div className="secondary-cta" onClick={emptyCart}>
            Vaciar carrito
          </div>
        </div>
        <Checkout />
      </div>
    );
  }
}

export default Cart;
