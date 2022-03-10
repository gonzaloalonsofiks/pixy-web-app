import React from 'react'
import './ItemListContainer.css'

import ServicesList from './ServicesList/ServicesList'
import ItemList from './ItemList/ItemList'

function ItemListContainer() {
  return (
    <main>
        <section id="webHosting" className="container container-services">
            <div id="services">
                <h2 className="services-title">Web hosting para tu sitio</h2>
                <p className="services-subtitle">No importa el tamaño de tu proyecto, tenemos un plan que se adapta a lo que necesitás.</p>
                <div className="servicesList-container">
                    <ServicesList serviceCount={ 3 }/>
                    <ItemList />
                </div>
            </div>
        </section>
    </main>
  )
}

export default ItemListContainer