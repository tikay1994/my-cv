import React from "react";
import "./style.css";
import avatar from "./hinh-girl.jpg";
function Information(props) {
  return (
    <div className="information">
      <div>
        <img className="avatar" src={avatar} alt="Image Avatar" />
        <p className="my-name">Nguyễn Tuấn Kiệt</p>
      </div>
    </div>
  );
}

export default Information;
