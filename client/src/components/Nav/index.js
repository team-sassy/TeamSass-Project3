import React, { Component } from "react";
import "./style.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { NavItem, Navbar, Button, Icon } from "react-materialize"



class Nav extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(res => {
      console.log(res.data)
      if (res.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null,
        })
      }
      console.log(this.props)
      this.props.history.push("/")
      // console.log("axos call done")
    }).catch(err => {
      console.log("Logged out error")
    })
  }
  render() {
    const loggedIn = this.props.loggedIn;
    console.log(this.props)
    console.log("render navbar")
    let logo = <img src="./otf_logo.png" alt="oft-logo" className="logoImage sticky-nav" />
    return (
      <div>
        {loggedIn ? (
          <Navbar  href="/" brand={logo} right>
            <NavItem href='/flight'><Icon>flight</Icon></NavItem>
            <NavItem href='/place'><Icon>location_city</Icon></NavItem>
            <NavItem href='/dining'><Icon>restaurant</Icon></NavItem>
            <NavItem href='/activity'><Icon>golf_course</Icon></NavItem>
            <NavItem href='/itinerary'><Icon>calendar_today</Icon></NavItem>
            <NavItem href='/logout'><Button onClick={this.logout} className="logoutBttn">Logout</Button></NavItem>
          </Navbar>
        ) : (
            <Navbar href="/" brand={logo} right>
              <NavItem href='/flight'><Icon>flight</Icon></NavItem>
              <NavItem href='/place'><Icon>location_city</Icon></NavItem>
              <NavItem href='/dining'><Icon>restaurant</Icon></NavItem>
              <NavItem href='/signup'><Button className="SignUpBttn">Sign-up</Button></NavItem>
              <NavItem href='/login'><Button className="loginBttn">Login</Button></NavItem>
            </Navbar>
          )}
      </div>
    )
  }
}




export default withRouter(Nav);
