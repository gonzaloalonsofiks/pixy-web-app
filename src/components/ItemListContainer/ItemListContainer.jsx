import React from 'react'
import ServicesList from './ServicesList/ServicesList'
import ItemList from './ItemList/ItemList'
import productLoad from '../../functions'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

function ItemListContainer() {

  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryID} = useParams()

  useEffect(() => {
    if(categoryID){
      productLoad
      .then((response) => {
        setServices(response.filter(service => service.category === categoryID))
      })
      .catch(error => console.log(error))
      .finally(()=> setLoading(false))

    }
    else{
      productLoad
      .then((response) => {
          setServices(response)
        })
      .catch((error) => {console.log(error)})
      .finally(() => setLoading(false));
    }

  }, [categoryID])

  return (
    <main>
        <ServicesList serviceCount={ 3 }/>
          {
            loading ? <p>Cargando...</p>
            :
            <ItemList services={services} />

          }
    </main>
  )
}

export default ItemListContainer