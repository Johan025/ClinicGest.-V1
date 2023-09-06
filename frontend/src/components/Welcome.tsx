import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import couv from "./../assets/couv.jpg";
import w from "./../assets/waves.png";
import Texte from "./Texte";
import Images from "./Images";

const Welcome = () => {
  return (
    <div className="welcome">
      <Images/>
    <div className="container1"></div>
      <Texte />
      
    
    </div>
  );
};

export default Welcome;
