import React, {Component} from "react";
import "./App.css";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import travelAPI from "./utils/travelAPI"


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
  render() {
    return ( 
    <>
      <Nav/>
      <Jumbotron/>
      <Footer 
      />
      <div className = "App" >
        <div className = "App-header">
             <h2> SASS YOUR WAY TO THE TOP</h2> 
        </div> 
             <p className = "App-intro" >The test value is: {this.state.testValue} </p> 
        </div> 
    </>

    );
  }
}



export default App;