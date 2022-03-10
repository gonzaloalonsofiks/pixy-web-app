import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import productLoad from '../../functions'
import ItemDetail from './ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

    //Llamada a la API
    const [service, setService] = useState({})

    useEffect(() => {
      productLoad
      .then(resolve => setService(resolve.find(service => service.id === 1)))
    }, [])


  return (
    <div>
        <ItemDetail service = {service}/>
    </div>
  )
}
