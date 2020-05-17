import React from "react";
import Information from "./infomation/information";
import Education from "./education/education";
import Introduce from "./introduce/introduce";
import "./style.css";
import Contact from "./contact/contact";
import icon from "../pic/abc.svg";
import View from "./viewproject/view";

function Content(props) {
  return (
    <div>
      <Introduce />
      <Information />
      <Education />
      <View />
      <div className="container-fluid relative-pic">
        <div className="background-behind-content">
          <img className="design-background-behind" src={icon}></img>
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default Content;
