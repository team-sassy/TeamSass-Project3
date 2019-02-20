import React from "react";
import "./style.css";
import { Button, Icon } from "react-materialize";
import HomeCard1 from "../Cards";

function Jumbotron() {
  return (
    <div>

      <div id="jumbotron" className="container">
        <div className="Welcome text-center">
          {/* <h1> Welcome to O.T.F</h1>
            <p> Begin your planning by today! </p> */}
        </div>
        <div className="tabsContainer">
          <Button href="#" className="tabsButton" waves='light'>Flight<Icon left>flight</Icon></Button>
          <Button href="#" className="tabsButton" waves='light'>Dining<Icon left>restaurant</Icon></Button>
          <Button href="#" className="tabsButton" waves='light'>Activities<Icon left>golf_course</Icon></Button>
          <Button href="#" className="tabsButton" waves='light'>Itinerary<Icon left>calendar_today</Icon></Button>
        </div>
      </div>

      <div id="jumbotron2" className="jumbotron text-center">

        <div className="Home-Details-Container">
          <div className="details1"><Icon className="detailCheck" small left>check</Icon></div>
          <p className="p1"> Orgnanize, Plan and Save your trip on the fly.</p>
          <div className="details1"><Icon className="detailCheck" small left>check</Icon></div>
          <p className="p1"> Access your trip details in your own Itinerary.</p>
        </div>
        <HomeCard1 />
      </div>
    </div>
  );
}

export default Jumbotron;

