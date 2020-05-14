import React, { useState, useEffect } from "react";
import "./style.css";
function Introduce(props) {
  const [intro, setIntro] = useState(" ");
  const introduce = ["I'm", "a", "Developer"];

  useEffect(() => {
    setTimeout(() => {
      const x = introduce[0];
      setIntro(x);
    }, 1000);
    setTimeout(() => {
      const x = introduce[1];
      setIntro(x);
    }, 2000);
    setTimeout(() => {
      const x = introduce[2];
      setIntro(x);
    }, 3000);
  }, []);

  return (
    <div>
      <div className="introduce">
        <div className="introduce-animation">
          <div className="introduce-content">{intro}</div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
