import React from "react";
import "./style.css";
import Icon from "../pic/web.svg";
import backgroundtop from "../pic/background-top.jpg";
import icon from "../pic/aaa.svg";
function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-text-style">
        <a href="#" className="mt-1 mr-5">
          <img className="logo" src={Icon}></img>
          <span className="navbar-text-style">My CV</span>
        </a>
        <button
          className="navbar-toggler p-0"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg class="icon-dropdown" viewBox="0 0 24 24">
            <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
          </svg>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <a className="nav-link navbar-text-style" href="#">
                Frontend <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle navbar-text-style"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Content
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#Education">
                  Education
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#Skill">
                  Skill
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#Project">
                  Projects
                </a>
              </div>
            </li>
          </ul>
          <div className="my-2 my-lg-0">
            <button className="btn btn-outline-dark my-2 my-sm-0">Login</button>
          </div>
        </div>
      </nav>
      <div
        className="container-fluid background-top-behind-content"
        style={{ backgroundImage: `url(${backgroundtop})` }}
      >
        <img className="design-background-behind" src={icon}></img>
      </div>
    </div>
  );
}

export default Header;
