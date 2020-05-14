import React from "react";
import "./style.css";
class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      open: true,
    };
  }
  handleClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };

  render() {
    const listEducation = [
      {
        Name: "Education",
        ListChildren: [
          { name: "Coder-X" },
          { name: "Freecodecamp" },
          { name: "Tutorial of Easy Frontend on Youtube" },
        ],
      },
      {
        Name: "Skill",
        ListChildren: [
          { name: "HTML" },
          { name: "CSS" },
          { name: "Javascript" },
          { name: "ReactJS, ReactHook" },
          { name: "Redux" },
          { name: "FrameWork: Bootstrap, Tailwind" },
        ],
      },
      {
        Name: "Project",
        ListChildren: [
          { name: "Demo-MorningChores" },
          { name: "Demo-CodeSandbox" },
          { name: "WebPage pagination pictures" },
        ],
      },
    ];
    return (
      <div className="text-content">
        <div>
          {listEducation.map((edu, index) => (
            <div key={index}>
              <div className="title">
                <p>{edu.Name}</p>
                <svg
                  class="icon icon-dropdown"
                  fill="#FFF"
                  viewBox="0 0 24 24"
                  onClick={this.handleClick}
                >
                  <path d="M6.984 9.984h10.031l-5.016 5.016z"></path>
                </svg>
              </div>
              {edu.ListChildren.map((des, index) => (
                <div
                  key={index}
                  className={this.state.open ? "content-information" : "hidden"}
                >
                  <p>{des.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Education;
