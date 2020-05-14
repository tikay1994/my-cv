import React from "react";
import Information from "./infomation/information";
import Education from "./education/education";
import Introduce from "./introduce/introduce";

function Content(props) {
  return (
    <div>
      <Introduce />
      <Information />
      <Education />
    </div>
  );
}

export default Content;
