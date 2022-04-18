import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemListContainer/ItemCount/ItemCount";
import { useCartContext } from "../../../contexts/cartContext";
import "./ItemDetail.css";

const ItemDetail = ({ singleService }) => {
  const [count, setCount] = useState(null);

  const { addToList } = useCartContext();

  const onAdd = (quantity) => {
    setCount(quantity);
    addToList({ ...singleService, quantity: quantity });
  };

  return (
    <div className="itemDetail-container">
      <div className="itemDetail-col">
        <img
          className="itemDetail-image"
          src={singleService.img}
          alt={singleService.name}
        />
      </div>
      <div className="itemDetail-col">
        <div className="itemDetail-text">
          <h2>{singleService.name}</h2>
          <p>{singleService.description}</p>
          <div className="support-message">
            <div className="support-message-title">Soporte especializado</div>
            <div>Este servicio cuenta con nuestro soporte técnico dedicado.</div>
          </div>

          <span className="itemDetail-price">$ {singleService.price}</span>
        </div>
        {count ? (
          <Link className="btn" to="/cart">
            {" "}
            Ir al carrito
          </Link>
        ) : (
          <ItemCount init={1} limit={10} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
