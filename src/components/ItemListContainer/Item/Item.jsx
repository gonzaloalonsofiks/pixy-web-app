import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

function Item(service) {
  return (
    <div className="service-container">
        <h3 className="service-name">{service.name}</h3>
        <img className="service-icon" src={service.img} alt="Img" />
        <p className="service-description">{service.description}</p>
        <p className="service-price">${service.price}</p>
        <ItemCount />
    </div>
  )
}

export default Item