import React, { useState } from "react";
import "./Navigation.css";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li className="navigation__item"><a href="#home" className="navigation__link">Início</a></li>
        <li className="navigation__item"><a href="#about" className="navigation__link">Sobre</a></li>
        <li className="navigation__item"><a href="#contact" className="navigation__link">Contato</a></li>
        <button className="navigation__button navigation__button--join">Inscrever-se</button>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navigation;
