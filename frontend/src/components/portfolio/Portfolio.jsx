import "./portfolio.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios.get("https://enzo-portfolio-api.onrender.com/api/portfolio").then((response) => {
      setPortfolio(response.data);
    });
  }, []);

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <h5>My recent projects</h5> 
      <div className="container portfolio__container">
      {
        portfolio.map((port) =>(
            <article key={port.id} className="portfolio__item">
            <h3> {port.title} </h3>
              <div className="portfolio__item__image">
                <img src={`https://enzo-portfolio-api.onrender.com/${port.image}`} alt={port.title} className="portImage" />
              </div>
              <div className="portfolio__item__cta">
                <a href={port.screenshots} className="btn" target="_blank" rel="noreferrer">Screenshots</a>
                <a href={port.liveDemoLink} className="btn btn-primary" target="blank" rel="noreferrer">Live Demo</a>
              </div>
            </article>
          )        
        )
      }
      </div>
    </section>
  );
};
export default Portfolio
