import React from "react";
import "./style.css";
import Icon from "../pic/web.svg";
import backgroundtop from "../pic/background-top.jpg";
import icon from "../pic/aaa.svg";
function Header(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img className="logo" src={Icon}></img>
          <span>My CV</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Frontend <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Content
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#Education">
                  Education
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#Skill">
                  Skill
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#Project">
                  Projects
                </a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div
        className="container-fluid background-top-behind-content"
        style={{ backgroundImage: `url(${backgroundtop})` }}
      >
        <img className="desgin-background-behind" src={icon}></img>
      </div>
    </div>
  );
}

export default Header;
