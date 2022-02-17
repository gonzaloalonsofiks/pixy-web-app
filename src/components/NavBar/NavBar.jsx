import logo from '../../img/Pixy Light.png';
import './NavBar.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

function NavBar() {
    return (
        <div className="header-row">
            <header className="header-container">
                <div id="nav-left">
                    <a href="#">
                      <img className="logo" src={ logo } alt="" />
                    </a>
                </div>
                <div id="nav-middle"></div>
                <div id="nav-right">
                  <nav id="nav-menu">
                    <div className="menu-items">
                      <ul>
                          <a href="#"><li className="menu-item">Inicio</li></a>
                          <a href="#"><li className="menu-item">Alojamiento web</li></a>
                          <a href="#"><li className="menu-item">Soporte</li></a>
                          <a href="#"><li className="menu-item">Contacto</li></a>
                      </ul>
                    </div>
                  </nav>
                </div>

            </header>
        </div>
    );
  }

  export default NavBar;