import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css'
import productLoad from '../../../functions'
import {useState, useEffect} from 'react'

function ItemList() {
  const [services, setServices] = useState([])

  useEffect(() => {
    productLoad
    .then((response) => {
        setServices(response)
      })
    .catch((error) => {console.log(error)})
  })


  return (
    <div className='serviceList-container'>
        {services.map((service) => <Item key={service.id} name={service.name} description={service.description} price={service.price} img={service.img} />)}
    </div>
  )
}

export default ItemList


