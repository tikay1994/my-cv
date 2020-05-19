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
            <svg class="icon-dropdown-content" fill="#FFF" viewBox="0 0 24 24">
              <path d="M6.984 14.016l5.016-5.016 5.016 5.016h-10.031z"></path>
            </svg>
          ) : (
            <svg class="icon-dropdown-content" fill="#FFF" viewBox="0 0 24 24">
              <path d="M6.984 9.984h10.031l-5.016 5.016z"></path>
            </svg>
          )}
        </button>
        <div class="collapse show" id="collapseExample">
          <div className="row">
            <div className="col-4">
              <svg class="icon-dropdown" fill="#335eea" viewBox="0 0 32 32">
                <path d="M15 25.875v-19.625c0 0-2.688-2.25-6.5-2.25s-6.5 2-6.5 2v19.875c0 0 2.688-1.938 6.5-1.938s6.5 1.938 6.5 1.938zM29 25.875v-19.625c0 0-2.688-2.25-6.5-2.25s-6.5 2-6.5 2v19.875c0 0 2.688-1.938 6.5-1.938s6.5 1.938 6.5 1.938zM31 8h-1v19h-12v1h-5v-1h-12v-19h-1v20h12v1h7.062l-0.062-1h12v-20z"></path>
              </svg>
              <div className="title-content" id="Education">
                Education
              </div>
              <div className="content-information">
                <p>Coder-X</p>
                <p>Freecodecamp</p>
                <p>Tutorial of Easy Frontend on Youtube</p>
              </div>
            </div>
            <div className="col-4">
              <svg class="icon-dropdown" fill="#335eea" viewBox="0 0 30 28">
                <path d="M9.641 21.859l-0.781 0.781c-0.203 0.203-0.516 0.203-0.719 0l-7.281-7.281c-0.203-0.203-0.203-0.516 0-0.719l7.281-7.281c0.203-0.203 0.516-0.203 0.719 0l0.781 0.781c0.203 0.203 0.203 0.516 0 0.719l-6.141 6.141 6.141 6.141c0.203 0.203 0.203 0.516 0 0.719zM18.875 5.187l-5.828 20.172c-0.078 0.266-0.359 0.422-0.609 0.344l-0.969-0.266c-0.266-0.078-0.422-0.359-0.344-0.625l5.828-20.172c0.078-0.266 0.359-0.422 0.609-0.344l0.969 0.266c0.266 0.078 0.422 0.359 0.344 0.625zM29.141 15.359l-7.281 7.281c-0.203 0.203-0.516 0.203-0.719 0l-0.781-0.781c-0.203-0.203-0.203-0.516 0-0.719l6.141-6.141-6.141-6.141c-0.203-0.203-0.203-0.516 0-0.719l0.781-0.781c0.203-0.203 0.516-0.203 0.719 0l7.281 7.281c0.203 0.203 0.203 0.516 0 0.719z"></path>
              </svg>
              <div className="title-content" id="Skill">
                Skill
              </div>
              <div className="content-information">
                <p>HTML</p>
                <p>CSS</p>
                <p>ReactJS, ReactHook</p>
                <p>Redux</p>
                <p>FrameWork: Bootstrap, Tailwind</p>
              </div>
            </div>
            <div className="col-4">
              <svg class="icon-dropdown" fill="#335eea" viewBox="0 0 35 32">
                <path d="M8.431 9.155h20.958c2.158 0 2.158-2.238 0.084-2.238h-14.486c-0.83 0-1.244-1.244-1.244-1.244s-0.581-1.825-1.743-1.825h-10.789c-1.576 0-1.162 1.825-1.162 1.825s2.407 20.47 2.573 21.715 1.453 1.612 1.453 1.612l2.821-18.103c0.208-1.327 1.12-1.7 1.535-1.742zM33.658 9.942h-24.563c-0.733 0-1.328 0.594-1.328 1.327l-2.572 16.4c0 0.734 0.595 1.328 1.328 1.328h24.563c0.732 0 1.328-0.594 1.328-1.328l2.572-16.4c0-0.733-0.593-1.327-1.328-1.327z"></path>
              </svg>
              <div className="title-content" id="Project">
                Project
              </div>
              <div className="content-information">
                <p>Demo-MorningChores</p>
                <p>Demo-CodeSandbox</p>
                <p>WebPage pagination pictures</p>
              </div>
            </div>
            {/* {listEducation.map((edu, index) => (
                <div key={index}>
                  <div id={edu.id} className="title-content">
                    {edu.Name}
                    <svg class="icon-dropdown" fill="#FFF" viewBox="0 0 24 24">
                      <path d="M6.984 9.984h10.031l-5.016 5.016z"></path>
                    </svg>
                  </div>
                  {edu.ListChildren.map((des, index) => (
                    <div key={index} className="content-information">
                      <p>{des.name}</p>
                    </div>
                  ))}
                </div>
              ))} */}
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
