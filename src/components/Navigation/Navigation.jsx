import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleJoinClick = () => {
    navigate("/inscrever-se");
  };

  // Função que trata o clique nos links de âncora
  const handleAnchorClick = (sectionId) => (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    // Fecha o menu se estiver aberto (mobile)
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li className="navigation__item">
          <a href="#home" className="navigation__link" onClick={handleAnchorClick("home")}>
            Início
          </a>
        </li>
        <li className="navigation__item">
          <a href="#about" className="navigation__link" onClick={handleAnchorClick("about")}>
            Sobre
          </a>
        </li>
        <li className="navigation__item">
          <a href="#graph" className="navigation__link" onClick={handleAnchorClick("graph")}>
            Gráfico
          </a>
        </li>
        <button
          className="navigation__button navigation__button--join"
          onClick={handleJoinClick}
        >
          Inscrever-se
        </button>
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
