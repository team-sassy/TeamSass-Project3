import React from "react";
import "./style.css";
import {Button,Icon} from "react-materialize";


function Jumbotron() {
  return (
    <>
   
      <div id="jumbotron" className="container text-center" width="1200">
          <div className="Welcome text-center"> 
            <h1> Welcome to O.T.F</h1>
            <p> Begin your planning by today! </p>
      </div>
     
      <div className="tabsContainer">
              <Button href="#" className="tabsButton" waves='light'>Flight<Icon left>flight</Icon></Button>
              <Button href="#" className="tabsButton" waves='light'>Dining<Icon left>restaurant</Icon></Button>
              <Button href="#" className="tabsButton" waves='light'>Activities<Icon left>golf_course</Icon></Button>
              <Button href="#" className="tabsButton" waves='light'>Itinerary<Icon left>calendar_today</Icon></Button>
       </div>
        
      </div>
          <div id="jumbotron2"className="jumbotron text-center">
              <div id="card1"className="row">
                <div id="card"className="col s12 m6">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">Card Title</span>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                      <a href="#">This is a link</a>
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="card2" className="row">
                <div id="card"className="col s12 m6">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">Card Title</span>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                      <a href="#">Maybe if You Click</a>
                      <a href="#">Something Happens</a>
                    </div>
                  </div>
                </div>
            </div>
        </div>

          
      </>

   );
  }




export default Jumbotron;

