import React from "react";
import "./style.css";
import Logo1 from "./images/otf_logo.png";

function Nav() {
  return (
    <nav>
     <div id="navbar" class="nav-wrapper">
     <img id="logo1" src={Logo1} alt="otf_logo" height="90" width="90"></img>
       <ul id="nav-mobile" class="right hide-on-med-and-down">
         <li><a href="sass.html"><i class="material-icons right">flight</i>Flight</a></li>
         <li><a href="badges.html"><i class="material-icons right">hotel</i>Hotel</a></li>
         <li><a href="collapsible.html"><i class="material-icons right">directions_car</i>Cars</a></li>
         <li><a href="collapsible.html"><i class="material-icons right">golf_course</i>Events</a></li>
         <li><a href="collapsible.html"><i class="material-icons right">today</i>Calendars</a></li>
       </ul>
     </div>
   </nav>
  );
}

export default Nav;
