import React from 'react'
import './ItemListContainer.css'
import heroImg from '../../img/hero-img.png'
import ServicesList from './ServicesList/ServicesList'

function ItemListContainer() {
  return (
    <main>
        <section className="container container-hero">
            <div id="hero">
                <div className="hero-column hero-column-left">
                    <h1 className="hero-title">Alojamiento web para tu sitio</h1>
                    <p className="hero-subtitle">Simple. Rápido. Y en pesos.</p>
                </div>

                <div className="hero-column">
                    <img className="hero-image" src={ heroImg } alt="Ilustración de un hombre organizando servidores de alojamiento web" />
                </div>
            </div>
        </section>

        <section id="webHosting" className="container container-services">
            <div id="services">
                <h2 className="services-title">Web hosting para tu sitio</h2>
                <p className="services-subtitle">No importa el tamaño de tu proyecto, tenemos un plan que se adapta a lo que necesitás.</p>
                <div className="servicesList-container">
                    <ServicesList serviceCount={ 4 }/>
                </div>
            </div>
        </section>
    </main>
  )
}

export default ItemListContainer