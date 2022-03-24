import { useCartContext } from "../../contexts/cartContext"
import './Cart.css'


function Cart() {

  const {cartList, emptyCart} = useCartContext()

  /* console.log(cartList) */


  return (
    <div>
      <h1>Carrito</h1>
      <p>Revisá tu orden de compra antes de continuar.</p>

      <div className="cartList-container">
        <table className="cartList-table">
          <thead className="cartList-headings">
            <th>Cant.</th>
            <th >Servicio</th>
            <th >Precio Unit.</th>
          </thead>

          {cartList.map(item => <tr  className="cartList-row">
            <td>{item.cantidad}</td>
            <td>{item.name}</td>
            <td>$ {item.price}</td>
            </tr>)}

        </table>
      </div>
      <div>
        <div className="secondary-cta" onClick={emptyCart}>Vaciar carrito</div>
      </div>


    </div>
  )
}

export default Cart