import React from "react";
import "./Etiqueta.css";

const Etiqueta = ({ children, className = "" }) => {
  return <span className={`etiqueta ${className}`}>{children}</span>;
};

export default Etiqueta;
