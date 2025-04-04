import React from "react";
import Button from "../Button/Button";

import "./Footer.css";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaRegFilePdf,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="main-container">
      <section className="container footer bg-transparent">
        <p>
          © Desarrollado por <b>Joel Llallihuaman</b> 💜
        </p>
        <div className="content">
          <Button
            className="bg-blue p-1"
            onClick={() =>
              window.open("https://www.linkedin.com/in/joel-llalli", "_blank")
            }
          >
            <FaLinkedin className="btn-icon" />
          </Button>
          <Button
            className="bg-secondary p-1"
            onClick={() => window.open("https://github.com/Joe0919", "_blank")}
          >
            <FaGithub className="btn-icon" />
          </Button>
          <Button
            className="bg-pink p-1"
            onClick={() =>
              window.open("https://www.instagram.com/jo3l_llalli/", "_blank")
            }
          >
            <FaInstagram className="btn-icon" />
          </Button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
