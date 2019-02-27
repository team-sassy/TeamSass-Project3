import React from "react";
import "./style.css";
import { Container, Row, Col, Icon } from "react-materialize"

const Footer =  () => {
  return (
      <footer className = "footer">
        <Container>
          <Row className="">
            <Col s={3} m={3} l={3}>
              <div><h5 className="knowUs"><b>Get to know us <Icon>expand_more</Icon></b> </h5></div>
              <div className="link"><a href="/" target="_blank" rel="noopener noreferrer" className="text">Katie Burns</a></div>
              <div className="link"><a href="/" target="_blank" rel="noopener noreferrer" className="text">Luis Quintero</a></div>
              <div className="link"><a href="/" target="_blank" rel="noopener noreferrer" className="text">Joyce Nguyen</a></div>
              <div className="link"><a href="https://duncandam86.github.io/Duncan-Dam-Portfolio/" target="_blank" rel="noopener noreferrer" className="text">Duncan Dam</a></div>
            </Col>
            <Col s={3} m={3} l={3}>
              <div><h5 className="usefulLink"><b>Useful Links <Icon>expand_more</Icon></b> </h5></div>
              <div className="link"><a href="https://www.groupon.com/coupons/events/travel" target="_blank" rel="noopener noreferrer" className="text">Coupon</a></div>
              <div className="link"><a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html/" target="_blank" rel="noopener noreferrer" className="text">Travel Advisory</a></div>
              <div className="link"><a href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html" rel="noopener noreferrer" target="_blank"className="text">Country Information</a></div>
              <div className="link"><a href="https://www.weather.gov/" target="_blank"className="text" rel="noopener noreferrer">Weather Advisory</a></div>
            </Col>
            <Col s={3} m={3} l={3}>
              <div><h5 className="knowUs"><b>Connect With Us <Icon>expand_more</Icon></b></h5></div>
              <div className="link"><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text">Instagram</a></div>
              <div className="link"><a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text">Twitter</a></div>
              <div className="link"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text">Facebook</a></div>
              <div className="link"><a href="https://www.snapchat.com/" target="_blank" rel="noopener noreferrer" className="text">Snapchat</a></div>
            </Col>
            <Col s={3} m={3} l={3}>
              <div><h5 className="knowUs"><b>Web Navigation <Icon>expand_more</Icon></b></h5></div>
              <div className="link"><a href="/flight" className="text">Flight</a></div>
              <div className="link"><a href="/place" className="text">Place</a></div>
              <div className="link"><a href="/dining" className="text">Dining</a></div>
            </Col>
          </Row>
          <Row>
            <h5 className="copyRight">Copyright Team Sass 2019</h5>
          </Row>
        </Container>
      </footer>
    
  );
}
export default Footer
