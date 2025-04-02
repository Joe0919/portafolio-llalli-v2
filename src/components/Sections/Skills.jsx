import React from "react";
import Container from "../Container/Container";
import skills from "../../assets/jsons/skills.json";

const Skills = () => {
  return (
    <Container id="skills">
      <h1 className="skills__title title-principal">Skills</h1>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li key={skill.label} className="skills__list-item caja">
            <img
              src={skill.img}
              alt={skill.alt}
              height="80"
              loading="lazy"
              width="80"
            />
            <span>{skill.label}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Skills;
