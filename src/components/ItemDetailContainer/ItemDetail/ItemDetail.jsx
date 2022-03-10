import ItemCount from '../../ItemListContainer/ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({service}) => {
  return (
    <div className="itemDetail-container">
        <div className="itemDetail-col">
            <img className="itemDetail-image" src={service.img} alt={service.name} />
        </div>
        <div className="itemDetail-col">
            <div className="itemDetail-text">
                <h2>{service.name}</h2>
                <p>{service.description}</p>
                <span className="itemDetail-price">$ {service.price}</span>
            </div>
            <div>
                <ItemCount />
            </div>
        </div>









    </div>
  )
}

export default ItemDetail