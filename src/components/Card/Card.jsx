import React from "react";

const Card = ({ className, children}) => {
  return <article data-aos="fade-up"className={`card ${className}`}>{children}</article>;
};

export default Card;
