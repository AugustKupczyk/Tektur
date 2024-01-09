import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoTektur from "../assets/images/logoTektur.jpeg";

function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <React.Fragment>
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white topbar static-top shadow">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Agregar la clase .open cuando el menú está abierto */}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''} burger-menu`}
        >
          {/* Company name and image */}
          <div className="company-info">
            <Link to="/">
              <img src={logoTektur} alt="Company Logo" className="company-logo" />
            </Link>
            <span className="company-name">Téktur</span>
          </div>
          <ul className="navbar-nav ml-auto">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href="/">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* Fin de la barra de navegación */}
    </React.Fragment>
  );
}

export default TopBar;
