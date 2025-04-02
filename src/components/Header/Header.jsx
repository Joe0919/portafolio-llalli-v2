import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa";
const Header = () => {
  return (
    <header className="main-container">
      <section className="container header bg-transparent">
        <img src="/img/logo1.png" className="header__logo" id="header__logo" />
        <nav className="header__nav content">
          <ul className="header__nav-list">
            <li className="nav-list-item hidden">
              <a href="#sobre-mi" className="nav-list-link">
                Sobre mi
              </a>
            </li>
            <li className="nav-list-item hidden">
              <a href="#skills" className="nav-list-link">
                Skills
              </a>
            </li>
            <li className="nav-list-item hidden">
              <a href="#formacion" className="nav-list-link">
                Formación
              </a>
            </li>
            <li className="nav-list-item hidden">
              <a href="#proyectos" className="nav-list-link">
                Proyectos
              </a>
            </li>
          </ul>
          <div className="content">
            <div className="nav-list-item content">
              <Button
                className="bg-blue"
                onClick={() => {
                    window.location.href = "mailto:joel09llalli@gmail.com";
                }} title="joel09llalli@gmail.com"
              >
                <MdOutlineEmail className="btn-icon" />
                Contacto
              </Button>
              <Button
                className="bg-primary px-3"
                onClick={() => window.open("/docs/cv-joel-llallihuaman.pdf", "_blank")} title="Ver Curriculum"
              >
                <FaRegFilePdf className="btn-icon" />
                CV
              </Button>
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Header;
