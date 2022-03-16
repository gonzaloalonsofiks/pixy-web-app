import ItemCount from '../../ItemListContainer/ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({singleService}) => {

    const onAdd = (quantity) =>{
        console.log(quantity)
    }

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
            <div>
                <ItemCount init={1} limit={10} onAdd={onAdd}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail