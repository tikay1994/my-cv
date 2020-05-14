import React from "react";
import "./style.css";
import iconlogo from "./iconlogo.png";
function Footer(props) {
  return (
    <div className="footer">
      <img className="icon-logo" src={iconlogo} alt="logo"></img>
      <div>
        <div>Happy Coding</div>
        <div>Thanks and best regards</div>
      </div>
    </div>
  );
}

export default Footer;
