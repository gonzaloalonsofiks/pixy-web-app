import React from 'react'
import heroImg from '../../img/hero-img.png'

function HeroSection() {
  return (
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
  )
}

export default HeroSection