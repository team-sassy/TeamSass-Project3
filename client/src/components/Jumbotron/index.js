import React from "react";
import "./style.css";
import {Icon} from "react-materialize";
import HomeCard1 from "../Cards";
import Mycarousel from "../Carousel";


function Jumbotron() {
  return (
    <div>

      <div id="jumbotron" className="container">
        <div className="Welcome text-center">
          {/* <h1> Welcome to O.T.F</h1>
            <p> Begin your planning by today! </p> */}
        </div>
          
          <div>
            <Mycarousel/>
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

