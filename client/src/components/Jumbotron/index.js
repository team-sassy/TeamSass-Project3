import React from "react";
import "./style.css";
import {Icon} from "react-materialize";
import HomeCard1 from "../Cards";



function Jumbotron() {
  return (

    <div>

      <div id="homepage" className="container">
        <div className="Welcome text-center">
          <h1 className="h1_homepage"> Welcome to On the Fly</h1>
            <p className="p_homepage"> Begin your planning today! </p>
        </div>
          
      </div>

      <div id="section2" className="jumbotron text-center">

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

