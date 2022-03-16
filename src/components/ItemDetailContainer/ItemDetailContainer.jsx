import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import productLoad from '../../functions'
import ItemDetail from './ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

    const [singleService, setSingleService] = useState({})
    const {detailID} = useParams()

    useEffect(() => {
      productLoad
      .then((response) => setSingleService(response.find(service => service.id == detailID)))
      .catch((error) => console.log(error))
      return () => {
      }
    }, [])


  return (
    <div>
        <ItemDetail singleService = {singleService}/>
    </div>
  )
}
