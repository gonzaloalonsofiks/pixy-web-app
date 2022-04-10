import React from "react";
import logo from "../../img/Pixy Light.png";
import './Footer.css'

function Footer() {
  return (
    <section id="footer">
      <div className="footer-columns">
        <div className="footer-col">
          <img className="logo" src={logo} alt="Logo de Pixy" />
        </div>
        <div className="footer-col">
            <h3 className="footer-title">Servicios</h3>
            <ul>
            <li>Dominios</li>
            <li>Desarrollo web</li>
            <li>Soporte</li>
        </ul>
        </div>
        <div className="footer-col">
        <h3 className="footer-title">Atención al Cliente</h3>
        <ul>
            <li>Documentación</li>
            <li>Crear ticket</li>
            <li>Ayuda en línea</li>
        </ul>
        </div>
      </div>
      <div>
        <p>
          Desarrollado por{" "}
          <a
            href="https://www.linkedin.com/in/gonzaloalonsofiks"
            target="_blank"
          >
            Gonzalo Alonso Fiks
          </a>
        </p>
      </div>
    </section>
  );
}

export default Footer;
