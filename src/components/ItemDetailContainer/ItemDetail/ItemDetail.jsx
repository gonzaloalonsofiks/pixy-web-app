import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../../contexts/cartContext'
import ItemCount from '../../ItemListContainer/ItemCount/ItemCount'
import { useCartContext } from '../../../contexts/cartContext'
import './ItemDetail.css'

const ItemDetail = ({singleService}) => {

    const [count, setCount] = useState(null)

    const {userName} = useCartContext()

    /* const {userName} = useContext(CartContext) */
    /* const {name} = useContext(CartContext)
    console.log(name) */

    const onAdd = quantity =>{
        console.log(quantity)
        setCount(quantity)
        addToList({... singleService, cantidad: quantity})
    }
    console.log(userName)

    return (
    <div className="itemDetail-container" >
        <div className="itemDetail-col">
            <img className="itemDetail-image" src={singleService.img} alt={singleService.name} />
        </div>
        <div className="itemDetail-col">
            <div className="itemDetail-text">
                <h2>{singleService.name}</h2>
                <p>{singleService.description}</p>
                <span className="itemDetail-price">$ {singleService.price}</span>
            </div>
            {
                count ? <Link to='/cart'> <p>Ir al carrito</p></Link>
                :
                <ItemCount init={1} limit={10} onAdd={onAdd}/>

            }
        </div>
    </div>
  )
}

export default ItemDetail