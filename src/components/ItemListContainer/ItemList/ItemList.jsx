import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css'


function ItemList({services}) {

  return (
    <div className='serviceList-container'>
        {services.map((service) =>
          <Item
            id={service.id}
            name={service.name}
            description={service.description}
            price={service.price}
            icon={service.icon}
            img={service.img}
          />)}
    </div>
  )
}

export default ItemList


