import React from "react";
import Container from "../Container/Container";
import experiences from "../../assets/jsons/experience-list.json";
import educations from "../../assets/jsons/education-list.json";
import Button from "../Button/Button";
import { FaArrowRight } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";

const Education = () => {
  return (
    <Container className="bg-primary" id="formacion">
      <div className="education">
        <div className="education-section">
          <h1 className="title-principal education-title">Experiencia</h1>
          <ul className="education-list">
            {experiences.map((experience) => (
              <li className="education-list-item" key={experience.id}>
                <div className="education-icon"></div>
                <time className="education-date">
                  {`${experience.initialDate} - ${experience.endDate} (${experience.duration})`}
                </time>
                <h2 className="education-title">{experience.position}</h2>
                <p className="education-description">{experience.company}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="education-section">
          <h1 className="title-principal">Formación</h1>
          <ul className="education-list">
            {educations.map((education) => (
              <li className="education-list-item" key={education.id} data-aos="fade-up">
                <div className="education-icon m-1"></div>
                <time className="education-date">
                  {`${education.initialDate} - ${education.endDate} (${education.hours})`}
                </time>
                <h2 className="education-title">{education.title}</h2>
                <p className="education-description">{education.institute}</p>
                <Button
                  className="education-btn"
                  onClick={() => window.open(education.href, "_blank")}
                >
                  <PiCertificate className="btn-icon" />
                  {education.category === "Constancia"
                    ? "Constancia"
                    : education.category === "Bachiller"
                    ? "Bachiller"
                    : "Certificado"}
                  <FaArrowRight className="btn-icon" />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Education;
