import React from "react";
import "./style.css";
import Logo1 from "./images/otf_logo.png";

function Nav() {
  return (
    <nav>
      <div id="navbar" className="nav-wrapper">
        <a href="/">
          <img id="logo1" src={Logo1} alt="otf_logo" height="90" width="90"></img>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/flight"><i className="material-icons right">flight</i>Flight</a></li>
          <li><a href="/dining"><i className="material-icons right">restaurant</i>Dining</a></li>
          <li><a href="/activity"><i className="material-icons right">beach_access</i>Activity</a></li>
          <li><a href="/itinerary"><i className="material-icons right">format_list_numbered</i>Itinerary</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
