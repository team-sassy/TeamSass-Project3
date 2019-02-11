import React, {Component} from "react";
import "./App.css";
// import axios from 'axios';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Section4 from "./components/Section4";
import travelAPI from "./utils/travelAPI";



class App extends Component {
  state = {
    "testValue": "SASSY......",
  }
  componentDidMount() {
    console.log("Mounting App")
    travelAPI.getSearchFlights("/api/test")
      .then(result => {
        console.log(result.data.test)
        this.setState({
          "testValue": result.data.test
        })
      })
  }
  render(){
    return (  
        <>

        <Nav/>
        <div id="section1"className="section1 bg-sm">
          <h1 id="section1-h1"> Hello World </h1>
          <p id ="section1-p">this is just a test of what we can do to style the page </p>
          <br></br>
          <p id="section1-p2">
                What is Lorem Ipsum?
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                   It has survived not only five centuries, but also the leap into electronic typesetting, 
                   remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                   Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </p>
        </div>
        <div id="section2"className="section1 bg-sm">
          <h1 id="section1-h1"> Hello World </h1>
          <p id ="section1-p">this is just a test of what we can do to style the page </p>
        </div>
        <div id="section3"className="section1 bg-sm">
          <h1 id="section1-h1"> Hello World </h1>
          <p id ="section1-p">this is just a test of what we can do to style the page </p>
        </div>
        <Section4/>
       
        <Footer/>

        </>
     );
  }
}



export default App;