import ItemCount from '../../ItemListContainer/ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({singleService}) => {

  return (
    <div className="itemDetail-container" key={singleService.id}>
        <div className="itemDetail-col">
            <img className="itemDetail-image" src={singleService.img} alt={singleService.name} />
        </div>
        <div className="itemDetail-col">
            <div className="itemDetail-text">
                <h2>{singleService.name}</h2>
                <p>{singleService.description}</p>
                <span className="itemDetail-price">$ {singleService.price}</span>
            </div>
            <div>
                <ItemCount />
            </div>
        </div>
    </div>
  )
}

export default ItemDetail