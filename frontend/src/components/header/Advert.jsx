import React from 'react'
import { useState, useEffect } from "react";
import { IoMdConstruct } from "react-icons/io";

function Advert() {
  const [displayText, setDisplayText] = useState("");
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const text = " Still under construction!";
    let index = 0;
    const interval = setInterval(() => {
      if (display) {
        if (index < text.length - 1) {
          setDisplayText((prevText) => prevText + text[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }
      else {
        setDisplayText("");
        index = 0;
      }
    }, 100);
    return () => clearInterval(interval);
  }, [display]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplay(!display);
    }, display ? 3000 : 1000);
    return () => clearTimeout(timeout);
  }, [display, displayText]);

  return <div><IoMdConstruct />&nbsp;&nbsp; {displayText} &nbsp;&nbsp;<IoMdConstruct /></div>;
}

export default Advert
