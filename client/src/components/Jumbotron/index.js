import React from "react";
import "./style.css";


function Jumbotron() {
  return (
    <>
   
          <div id="jumbotron" className="responsive-img" className="jumbotron text-center">
              <h1>Welcome to </h1>
              <h1> On the fly </h1> 
              <p>Organize,Plan, Adventure</p>
              <a target="_blank" 
                rel="noopener noreferrer" 
                href="http://www.google.com/">
                  Search Flights.
              </a>
            </div>
          <div id="jumbotron2"className="jumbotron text-center">
              <h1 id="jh1">A better traveling experience.</h1>
              <p id="jp1">Find and plan your perfect getaway so that you can move on the fly</p>
          </div>
          <div id="jumbotron"className="jumbotron text-center">
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
