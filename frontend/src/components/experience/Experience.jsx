import React, { useState, useEffect } from "react";
import axios from "axios";
import "./experience.css";

export const Experience = () => {
  const [experiences, setExperience] = useState([]);

  useEffect(() => {
    axios.get("https://enzo-portfolio-api.onrender.com/api/experience").then((response) => {
      setExperience(response.data);
    });
  }, []);

  return (
    <section id="experience">
      <h2>My Experience</h2>
      <h5>What skills have I?</h5>
      <div className="container experience__container">
        {experiences.map((experience) => (
          <div key={experience._id} className="experience">
            {/* <p>{experience.icon}</p> */}
            <h3>{experience.skill}</h3>
            <h6>{experience.detail}</h6>
            <p>{experience.levelOfKnowledge}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experience;
