import React from "react";
import "./style.css";
import Logo1 from "./images/otf_logo.png";

function Nav() {
  return (
    <nav>
      <div id="navbar" class="nav-wrapper">
        <a href="/">
          <img id="logo1" src={Logo1} alt="otf_logo" height="90" width="90"></img>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/flight"><i class="material-icons right">flight</i>Flight</a></li>
          <li><a href="/dining"><i class="material-icons right">restaurant</i>Dining</a></li>
          <li><a href="/activity"><i class="material-icons right"></i>Activity</a></li>
          <li><a href="/itinerary"><i class="material-icons right">golf_course</i>Itinerary</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
