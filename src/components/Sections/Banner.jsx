import React from "react";
import Button from "../Button/Button";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaRegFilePdf,
} from "react-icons/fa";
import Container from "../Container/Container";

const Banner = () => {
  return (
    <Container className="banner" id="sobre-mi">
      <div className="banner__text">
        <h1 className="banner__title">Joel Llallihuaman</h1>
        <h3 className="banner__subtitle">Bach. Ing. Sistemas e Informática</h3>
        <p className="banner__description">
          Enfocado y con experiencia en el desarrollo de software,
          administración de base de datos y otras habilidades en la ciencia de
          la Computación y telecomunicaciones.
        </p>
        <p className="banner__description">
          Apasionado por desarrollar sistemas atractivos y
          funcionales para mejorar la experiencia del usuario. Busco contribuir en la mejora continua con
          actitud positiva y proactiva.
        </p>
        <div className="content">
          <Button
            className="bg-blue"
            onClick={() => window.open("https://github.com/Joe0919", "_blank")}
          >
            <FaLinkedin className="btn-icon" />
            Linkedin
          </Button>
          <Button
            className="bg-secondary"
            onClick={() =>
              window.open("https://www.linkedin.com/in/joel-llalli", "_blank")
            }
          >
            <FaGithub className="btn-icon" />
            Github
          </Button>
          <Button
            className="bg-pink"
            onClick={() =>
              window.open("https://www.instagram.com/jo3l_llalli/", "_blank")
            }
          >
            <FaInstagram className="btn-icon" />
            Instagram
          </Button>
          <Button
            className="bg-primary px-3"
            onClick={() =>
              window.open("/docs/cv-joel-llallihuaman.pdf", "_blank")
            }
          >
            <FaRegFilePdf className="btn-icon" />
            CV
          </Button>
        </div>
      </div>
      <img className="banner__img" src="/img/perfil.jpg" alt="" />
    </Container>
  );
};

export default Banner;
