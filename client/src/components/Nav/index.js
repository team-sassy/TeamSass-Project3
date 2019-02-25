import React, { Component } from "react";
import "./style.css";
import Logo1 from "./images/otf_logo.png";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Hmenu from "../Hamburger Menu ";


class Nav extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
    this.state = {
      redirectTo: null
    }
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
        this.setState({
          redirectTo: "/login"
        })
      }
      console.log(this.props)
      console.log("axos call done")
    }).catch(err => {
      console.log("Logged out error")
    })
  }
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      const loggedIn = this.props.loggedIn;
      console.log(this.props)
      console.log("render navbar")
      return (
        <div>
          {loggedIn ? (
            <nav>
              <section id="navbar" className="nav-wrapper">
                <Link to="/">
                  <img id="logo1" src={Logo1} alt="otf_logo" height="90" width="90"></img>
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><Link to="/flight"><i className="material-icons left">flight</i></Link></li>
                  <li><Link to="/dining"><i className="material-icons left">restaurant</i></Link></li>
                  <li><Link to="/activity"><i className="material-icons left">golf_course</i></Link></li>
                  <li><Link to="/itinerary"><i className="material-icons left">calendar_today</i></Link></li>
                  <li><Link to="/login" className="btn btn-link text-secondary" onClick={this.logout}>logout</Link></li>
                </ul>
              </section>
              <Hmenu className="menu1"></Hmenu>
            </nav>
          ) : (
              <nav>
                <section id="navbar" className="nav-wrapper">
                  <Link to="/">
                    <img id="logo1" src={Logo1} alt="otf_logo" height="90" width="90"></img>
                  </Link>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/signup"><i className="material-icons left"></i>Sign-up</Link></li>
                    <li><Link to="/login"><i className="material-icons left"></i>Login</Link></li>
                    {/* <li><Link to="/flight"><i className="material-icons left">flight</i></Link></li> */}
                    {/* <li><Link to="/dining"><i className="material-icons left">restaurant</i></Link></li> */}
                    {/* <li><Link to="/activity"><i className="material-icons left">golf_course</i></Link></li> */}
                    {/* <li><Link to="/itinerary"><i className="material-icons left">calendar_today</i></Link></li> */}
                  </ul>
                </section>
              </nav>
            )}
        </div>
      )
    }
  }

}



export default Nav;
