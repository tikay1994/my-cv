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
        id: "Education",
        Name: ">$ Education",
        ListChildren: [
          { name: "Coder-X" },
          { name: "Freecodecamp" },
          { name: "Tutorial of Easy Frontend on Youtube" },
        ],
      },
      {
        id: "Skill",
        Name: ">$ Skill",
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
        id: "Project",
        Name: ">$ Project",
        ListChildren: [
          { name: "Demo-MorningChores" },
          { name: "Demo-CodeSandbox" },
          { name: "WebPage pagination pictures" },
        ],
      },
    ];
    return (
      <div className="text-content">
        <button
          class="btn btn-dark my-2"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={this.handleClick}
        >
          {this.state.open ? (
            <svg class="icon icon-dropdown" fill="#FFF" viewBox="0 0 24 24">
              <path d="M6.984 14.016l5.016-5.016 5.016 5.016h-10.031z"></path>
            </svg>
          ) : (
            <svg class="icon icon-dropdown" fill="#FFF" viewBox="0 0 24 24">
              <path d="M6.984 9.984h10.031l-5.016 5.016z"></path>
            </svg>
          )}
        </button>
        <div class="collapse show" id="collapseExample">
          <div>
            <div>
              {listEducation.map((edu, index) => (
                <div key={index}>
                  <div id={edu.id} className="title-content">
                    {edu.Name}
                    <svg
                      class="icon icon-dropdown"
                      fill="#FFF"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.984 9.984h10.031l-5.016 5.016z"></path>
                    </svg>
                  </div>
                  {edu.ListChildren.map((des, index) => (
                    <div key={index} className="content-information">
                      <p>{des.name}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
