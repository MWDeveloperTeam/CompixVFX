import React from "react";
import { Section } from "./Style";

const Card = ({ icon, title, label }) => {
  return (
    <div style={{padding: '1rem'}}>
      <Section>
        <div className="icon_container">
          <i className={icon}></i>
        </div>
        <div className="title_container">
          <h1>{title}</h1>
        </div>
        <div className="label_container">
          <p>
            {label.slice(0, 60)}...
          </p>
        </div>
        <div className="button_container">
          <button>Read More</button>
        </div>
      </Section>
    </div>
  );
};

export default Card;
