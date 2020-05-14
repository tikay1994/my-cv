import React from "react";
import "./style.css";
import Icon from "../pic/web.svg";
function Header(props) {
  return (
    <div className="menu">
      <img className="logo" src={Icon} alt="icon" />
      <p className="text-menu">CV FRONTEND</p>
    </div>
  );
}

export default Header;
