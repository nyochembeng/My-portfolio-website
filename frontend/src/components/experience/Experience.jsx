import React, { useState, useEffect } from "react";
import axios from "axios";
import "./experience.css";
import config from "../../config.json";

// importing react-icons
import { BiCodeBlock } from "react-icons/bi";
import { BsWordpress } from "react-icons/bs";
import { AiFillDatabase } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineLaptop } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import {
  FaNetworkWired,
  FaYoutube,
  FaLaptopCode,
  FaPython,
  FaCode,
  FaReact,
} from "react-icons/fa";

const iconMapping = {
  BiCodeBlock: <BiCodeBlock />,
  BsWordpress: <BsWordpress />,
  FaCode: <FaCode />,
  FaPython: <FaPython />,
  AiFillDatabase: <AiFillDatabase />,
  CgWebsite: <CgWebsite />,
  FaLaptopCode: <FaLaptopCode />,
  MdOutlineDesignServices: <MdOutlineDesignServices />,
  FaNetworkWired: <FaNetworkWired />,
  FaYoutube: <FaYoutube />,
  FaReact: <FaReact />,
  AiOutlineLaptop: <AiOutlineLaptop />,
};

export const Experience = () => {
  const [experiences, setExperience] = useState([]);

  useEffect(() => {
    axios.get(`${config.webServiceUrl}/api/experience`).then((response) => {
      setExperience(response.data);
    });
  }, []);

  return (
    <section id="experience">
      <h2>My Expertise</h2>
      <h5>What skills have I?</h5>
      <div className="container experience__container">
        {experiences.map((experience) => (
          <div key={experience._id} className="experience">
            <p className="icon">{iconMapping[experience.iconKey]}</p>
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
