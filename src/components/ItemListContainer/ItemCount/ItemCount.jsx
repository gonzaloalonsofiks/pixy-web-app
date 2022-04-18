import {useState} from 'react'
import React from 'react'
import './ItemCount.css'

function ItemCount({init, limit, onAdd}) {
    const [count, setcount] = useState(init);


    const increaseCount = () => {
        if (count < limit) {
            setcount(count +1)
        }
    }

    const decreaseCount = () => {
        if (count > init){
            setcount(count -1)
        }
    }

    const addToCart = () => {
        if (count === 0){
            alert("No podemos agregar este producto a tu carrito")
        }
        else{
            onAdd(count)
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