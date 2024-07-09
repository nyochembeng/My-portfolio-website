import React from "react";
import CV from ".././../assets/Nyochembeng Enzo Nkengafack's Resume.pdf";
import { Link } from "react-scroll";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="btn btn-primary"
      >
        Let's Chat
      </Link>
    </div>
  );
};

export default CTA;
