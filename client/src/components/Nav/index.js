import React from "react";
import "./style.css";
import Logo1 from "./images/otf_logo.png";
// import {ul} from "react-materialize";

function Nav() {
  return (
    <>
<ul id="dropdown1" className="dropdown-content">
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  <li className="divider"></li>
  <li><a href="#!">three</a></li>
</ul>
    <nav>
      <div id="navbar" className="nav-wrapper">
        <a href="/">
          <img id="logo1" src={Logo1} alt="otf_logo" height="90" width="90"></img>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/flight"><i className="material-icons left">flight</i></a></li>
          <li><a href="/dining"><i className="material-icons left">restaurant</i></a></li>
          <li><a href="/activity"><i className="material-icons left">golf_course</i></a></li>
          <li><a href="/itinerary"><i className="material-icons left">calendar_today</i></a></li>
        </ul>
      </div>
      
    </nav>
    </>
  );
}

export default Nav;
