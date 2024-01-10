import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoTektur from "../assets/images/logoTektur.jpeg";

function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = ['Nosotros', 'Nuestros Pilares', 'Item 3', 'Item 4'];

  const handleNavLinkClick = (item) => {
    // Scroll to the corresponding section within the same page
    const targetSection = document.getElementById(item.toLowerCase().replace(/\s+/g, '-'));
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Close the menu
    setIsMenuOpen(false);
  };

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
                <span
                  className={`nav-link ${window.location.hash === `#${item.toLowerCase().replace(/\s+/g, '-')}` ? 'active' : ''}`}
                  onClick={() => handleNavLinkClick(item)}
                >
                  {item}
                </span>
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