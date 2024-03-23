import React, { useState, useEffect } from "react";
import axios from "axios";
import "./services.css";

export const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/service").then((response) => {
      setServices(response.data);
    });
  }, []);

  return (
    <section id="services">
      <h2>Services</h2>
      <h5>What services do I offer?</h5>
      <div className="container services__container">
        {services.map((service) => (
          <div key={service._id} className="service">
            <h3>{service.service}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
