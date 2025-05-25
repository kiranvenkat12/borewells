import React from "react";
import "./serviceCard.css";

function ServiceCard({ image, title, description, teluguDescription }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <div className="card-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{teluguDescription}</p>
      </div>
    </div>
  );
}

export default ServiceCard;