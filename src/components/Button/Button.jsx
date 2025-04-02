import React from "react";
import "./Button.css";

const Button = ({ children, className = "", onClick, title = "" }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick} title={title}>
      {children}
    </button>
  );
};

export default Button;
