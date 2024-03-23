import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail, BiFolder } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Home"
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <AiOutlineHome />
        </Link>
        <Link
          data-tooltip-id="my-tooltip"
          data-tooltip-content="About"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <AiOutlineUser />
        </Link>
        <Link
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Experience"
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <BiBook />
        </Link>
        <Link
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Services"
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <RiServiceLine />
        </Link>
        <Link
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Portfolio"
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <BiFolder />
        </Link>
        <Link
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Contact"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <BiMessageSquareDetail />
        </Link>
      </nav>
      <Tooltip id="my-tooltip" />
    </>
  );
};

export default Navbar;
