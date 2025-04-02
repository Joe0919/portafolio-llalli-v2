import React from "react";
import Button from "../Button/Button";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaRegFilePdf,
} from "react-icons/fa";

const Footer = () => {
  return (
    <header className="main-container">
      <section className="container header bg-transparent">
        <p>
          © Desarrollado por <b>Joel Llallihuaman</b> 💜
        </p>
        <div className="content">
          <Button
            className="bg-blue p-1"
            onClick={() => window.open("https://github.com/Joe0919", "_blank")}
          >
            <FaLinkedin className="btn-icon" />
          </Button>
          <Button
            className="bg-secondary p-1"
            onClick={() =>
              window.open("https://www.linkedin.com/in/joel-llalli", "_blank")
            }
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
    </header>
  );
};

export default Footer;
