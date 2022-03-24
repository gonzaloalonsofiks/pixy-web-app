import { Link, NavLink } from 'react-router-dom';
import logo from '../../img/Pixy Light.png';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

function NavBar() {
    return (
        <div className="header-row">
            <header className="header-container">
                <div id="nav-left">
                    <NavLink to={'/'}>
                      <img className="logo" src={ logo } alt="Logo de Pixy" />
                    </NavLink>
                </div>
                <div id="nav-middle"></div>
                <div id="nav-right">
                  <nav id="nav-menu">
                    <div className="menu-items">
                      <ul>
                          <NavLink to={'/'}><li className="menu-item">Inicio</li></NavLink>
                          <NavLink to={'/categoria/dominios'}><li className="menu-item">Dominios</li></NavLink>
                          <NavLink to={'/categoria/desarrollo-web'}><li className="menu-item">Desarollo web</li></NavLink>
                          <NavLink to={'/categoria/soporte'}><li className="menu-item">Soporte</li></NavLink>
                          <NavLink to={'/cart'}>
                            <CartWidget />
                          </NavLink>
                      </ul>
                    </div>
                  </nav>
                </div>

            </header>
        </div>
    );
  }

  export default NavBar;