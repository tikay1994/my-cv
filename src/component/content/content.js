import React from "react";
import Information from "./infomation/information";
import Education from "./education/education";
import Introduce from "./introduce/introduce";
import "./style.css";
function Content(props) {
  return (
    <div>
      <div className="container-fluid">
        <div className="background-behind-content"></div>
        <Introduce />
        <Information />
      </div>
      <Education />
    </div>
  );
}

export default Content;
