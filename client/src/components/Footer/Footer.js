import React from "react";
import "./Footer.css";

const Footer = () => (
  <nav className="nav-lq navbar navbar-dark bg-light">
    <a className="navbar-brand" href="/">
    </a>
    <div className = "App" >
        <div className = "App-header">
            <img src = {logo}className = "App-logo"alt = "logo"/>
             <h2> SASS YOUR WAY TO THE TOP</h2> 
        </div> 
             <p className = "App-intro" >The test value is: {this.state.testValue} </p> 
        </div> 
  </nav>
);

export default Footer;
