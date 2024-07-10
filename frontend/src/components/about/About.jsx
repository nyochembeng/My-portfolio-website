import React from "react";
import "./about.css";
import CTA from "../header/CTA";
import moi from "../../assets/Me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about" className="about_section">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={moi} alt="Me " />
            <span className="about_img_hover"></span>
          </div>
        </div>
        <div className="about__me__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>3+ world widely</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <p>
            I am a Software Engineering student at the University of Buea, in
            the Faculty of Engineering and Technology. Also, a Software
            Developer specializing in the building of efficient, scalable and
            robust web and mobile applications. Acquired various skills in
            various domains over the past years which are: Problem-Solving, Team
            Collaboration, Technical Documentation and Programming.
          </p>
          <CTA />
        </div>
      </div>
    </section>
  );
};

export default About;
