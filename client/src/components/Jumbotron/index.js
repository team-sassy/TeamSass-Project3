import React from "react";
import "./style.css";
import { Icon, Button} from "react-materialize";
import HomeCard1 from "../Cards";
import { Link } from "react-router-dom";

function Jumbotron() {
  return (
    <div>
      <div id="homepage" className="container">
        <div className="Welcome text-center">
          <h1 className="h1_homepage"> Welcome to On the Fly</h1>
          <h5 className="p_homepage"> Begin your planning today! </h5>
        </div>
        <div>
          <Link to="/flight"><Button className="frontPageButton"><Icon left>flight</Icon> Flight</Button></Link>
          <Link to="/place"><Button className="frontPageButton"><Icon left>location_city</Icon> Place</Button></Link>
          <Link to="/dining"><Button className="frontPageButton"><Icon left>restaurant</Icon> Dining</Button></Link>
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

