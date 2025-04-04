import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Etiqueta from "../Etiqueta/Etiqueta";
import AOS from "aos";

import { FaEye, FaGithub } from "react-icons/fa";

import proyects from "../../assets/jsons/projects.json";

const Proyects = () => {
  const [activeCategory, setActiveCategory] = useState("Todo");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, [activeCategory]);

  const cantCategoria = proyects.reduce((cant, proyect) => {
    proyect.technologies.forEach((tecnologia) => {
      cant[tecnologia] = (cant[tecnologia] || 0) + 1;
    });
    return cant;
  }, {});

  const filteredProyects =
    activeCategory === "Todo"
      ? proyects
      : proyects.filter((proyect) =>
          proyect.technologies.includes(activeCategory)
        );

  return (
    <Container id="proyectos">
      <h1 className="title-principal education-title">Proyectos</h1>
      <div className="content filter-buttons">
        <Button
          className={activeCategory === "Todo" ? "bg-gray active" : "bg-gray"}
          onClick={() => setActiveCategory("Todo")}
        >
          {`(${proyects.length}) Todo`}
        </Button>

        {Object.entries(cantCategoria).map(([tech, count]) => (
          <Button
            key={tech}
            className={activeCategory === tech ? "bg-gray active" : "bg-gray"}
            onClick={() => setActiveCategory(tech)}
          >
            {`(${count}) ${tech}`}
          </Button>
        ))}
      </div>
      <div className="proyects">
        {filteredProyects.map((proyect) => (
          <Card className={"proyect-card"} key={proyect.title}>
            <a className="proyect-link" href={proyect.url} target="_blank">
              <img
                src={proyect.src}
                alt={proyect.alt}
                loading="lazy"
                className="proyect-img"
              />
            </a>
            <h3 className="proyect-title">{proyect.title}</h3>
            <div className="proyect-info">
              <ul className="proyect-list">
                {proyect.technologies.map((technologie) => (
                  <li className="proyect-list-item" key={technologie}>
                    <Etiqueta>
                      <img
                        alt={`${technologie} icon`}
                        height="30"
                        src={`/icons/${technologie.toLowerCase()}.svg`}
                        width="30"
                      />
                      {technologie}
                    </Etiqueta>
                  </li>
                ))}
              </ul>
              <p className="proyect-description">{proyect.description}</p>
              <div className="proyect-buttons">
                {proyect.url !== "" && (
                  <Button
                    className="button-100 bg-blue"
                    onClick={() => window.open(proyect.url, "_blank")}
                  >
                    <FaEye className="btn-icon" />
                    Demo
                  </Button>
                )}

                <Button
                  className="button-100 bg-gray"
                  onClick={() => window.open(proyect.repo, "_blank")}
                >
                  <FaGithub className="btn-icon" />
                  Repositorio
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Proyects;
