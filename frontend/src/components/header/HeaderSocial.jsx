import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaFacebookF  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="https://github.com/nyochembeng" target="blank">
        <FaGithub />{" "}
      </a>

      <a
        href="https://web.facebook.com/profile.php?id=61553323134562"
        target="blank"
      >
        <FaFacebookF />{" "}
      </a>

      <a href="https://linkedin.com" target="blank">
        <BsLinkedin />{" "}
      </a>
      
      <a href="https://twitter.com" target="blank">
        <FaXTwitter />{" "}
      </a>
    </div>
  );
};

export default HeaderSocial;
