import React from "react";
import "./viewproject.css";
import hinh1 from "./img/hinh1.png";
import hinh2 from "./img/hinh2.png";
import hinh3 from "./img/hinh3.png";
import Slide from "./viewproject";
function View(props) {
  const collection = [
    { src: hinh1, caption: "Project 1" },
    { src: hinh2, caption: "Project 2" },
    { src: hinh3, caption: "Project 3" },
  ];
  return (
    <div>
      <Slide
        input={collection}
        ratio={`3:2`}
        mode={`automatic`}
        timeout={`3000`}
      />
    </div>
  );
}

export default View;
