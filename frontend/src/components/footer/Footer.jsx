import React from "react";
import { Link } from "react-scroll";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../assets/my logo.png";

import "./footer.css";
const Footer = () => {
  const presentDate = new Date();
  const year = presentDate.getFullYear;

  return (
    <div className="footer__container">
      <Link
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Home"
        className="footer__logo"
        to="header"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <img src={Logo} alt="My Logo" className="my-logo"/>
      </Link>

      <ul className="permalinks">
        <li>
          <Link
            to="header"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      <Tooltip id="my-tooltip" />

      <div className="footer__media">
        <a href="https://github.com" target="blank">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="blank">
          <BsLinkedin />
        </a>
        <a href="https://facebook.com" target="blank">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="blank">
          <FaXTwitter />
        </a>
      </div>

      <div className="copyRight">
        <h3>
          &copy; 2024 {year} Nyochembeng Enzo Nkengafack. All rights reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
