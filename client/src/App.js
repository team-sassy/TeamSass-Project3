import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ActivitySubmit from "./pages/ActivitySubmit";
import FlightSearch from "./pages/FlightSearch";
import DiningSearch from "./pages/DiningSearch";
import Signup from "./pages/Sign-up";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import Itinerary from "./pages/Itinerary";
// import NoMatch from "./pages/NoMatch"


class App extends Component {
  state = {
    loggedIn: false,
    username: null
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/api/user').then(res => {
      console.log(res.data);
      if (res.data.user) {
        this.setState({
          loggedIn: true,
          username: res.data.user.username
        })
      } else {
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/flight" component={FlightSearch} />
            <Route exact path="/dining" component={DiningSearch} />
            <Route exact path="/activity" component={ActivitySubmit} />
            {/* <Route exact path="/itinerary" component={Itinerary} />
          <Route component={NoMatch} />  */}

          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
