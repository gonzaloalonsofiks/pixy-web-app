import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

function Item(singleService) {

  return (
    <div className="service-container" key={singleService.id}>
        <h3 className="service-name">{singleService.name}</h3>
        <img className="service-icon" src={singleService.icon} alt="Img" />
        <p className="service-description">{singleService.description}</p>
        <p className="service-price">${singleService.price}</p>
        <Link to={`detalle/${singleService.id}`} className="service-details-btn">
          <p>Ver detalles</p>
        </Link>
    </div>
  )
}

export default Item