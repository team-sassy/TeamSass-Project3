import React, {Component} from "react";
import "./App.css";
// import axios from 'axios';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";
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
        <Section1/>
        <Footer/>
        
        </>
     );
  }
}



export default App;