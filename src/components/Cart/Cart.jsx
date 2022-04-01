import { useCartContext } from "../../contexts/cartContext";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cartList, emptyCart, subtotal, removeItem, totalCart } =
    useCartContext();

  if (cartList.length === 0) {
    return (
      <>
        <h1>Carrito</h1>

        <p>Tu carrito está vacío. ¿Elegimos algunos servicios?</p>
        <Link to="/">Ir al Inicio</Link>
      </>
    );
  } else {
    return (
      <div>
        <h1>Carrito</h1>
        <p>Revisá tu orden de compra antes de continuar.</p>

        <div className="cartList-container">
          <table className="cartList-table" border="2">
            <thead>
              <tr>
                <th className="cartList-headings"></th>
                <th className="cartList-headings">Cant.</th>
                <th className="cartList-headings">Servicio</th>
                <th className="cartList-headings">Precio Unit.</th>
                <th className="cartList-headings">Subtotal</th>
              </tr>
            </thead>

            {cartList.map((item) => (
              <tr className="cartList-row" key={item.id}>
                <td>
                  <span
                    className="cartList-remove"
                    onClick={() => removeItem(item.id)}
                  >
                    <AiFillDelete />{" "}
                  </span>
                </td>
                <td>{item.quantity}</td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <td>$ {subtotal(item.quantity, item.price)}</td>
              </tr>
            ))}
          </table>
          <div>Total: $ {totalCart()}</div>

          {/* <div className="primary-cta" onClick={}>
            Terminar mi compra
          </div> */}
          <Link to="/checkout" className="primary-cta">Continuar</Link>
          <div className="secondary-cta" onClick={emptyCart}>
            Vaciar carrito
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
