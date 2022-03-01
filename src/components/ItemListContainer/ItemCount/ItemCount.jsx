import {useState} from 'react'
import React from 'react'
import './ItemCount.css'

function ItemCount() {
    const [count, setcount] = useState(1);

    let maxQuantity = 10;
    let minQuantity = 1;


    const increaseCount = () => {
        if (count < maxQuantity) {
            setcount(count +1)
        }
    }

    const decreaseCount = () => {
        if (count > minQuantity){
            setcount(count -1)
        }
    }

    const addToCart = () => {
        if (count === 0){
            alert("No podemos agregar este producto a tu carrito")
        }
        else{
            console.log(count + " unidad/es agregada/s al carrito.")
        }
    }

  return (
    <div className="itemCount">
        <div className="itemCount-container">
            <div className="itemCount-carousel">
                <div className="itemCount-control" onClick={decreaseCount}>-</div>
                <div className="itemCount-count">{count}</div>
                <div className="itemCount-control" onClick={increaseCount}>+</div>
            </div>
            <div>
                <div className="addToCart" onClick={addToCart} >Agregar al carrito</div>
            </div>
        </div>
    </div>
  )
}

export default ItemCount