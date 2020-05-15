import React from "react";
import "./style.css";
import iconlogo from "./iconlogo.png";
function Footer(props) {
  return (
    <div className="footer">
      <img className="icon-logo" src={iconlogo} alt="logo"></img>
      <div>
        <h2>Happy Coding</h2>
        <h4>Thanks and best regards</h4>
      </div>
    </div>
  );
}

export default Footer;
