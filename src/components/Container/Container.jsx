import React from "react";
import "./Container.css";
const Container = ({ children, className, id }) => {
  return (
    <section data-aos="fade-up" className={`container my-3 ${className}`} id={id}>{children}</section>
  );
};

export default Container;
