import React from "react";
import { Button, Input, Row, Col } from "react-materialize";
import "./style.css";

const SearchFlightForm = props => {
    return (
        <>
            <Row className="headerRow">
                <Col l={2} m={2} s={2} />
                <Col l={6} m={6} s={6}>
                    <p className="diningSearchTerm">Find Flight To Your Favorite Location</p>
                </Col>
            </Row>
            <Row>
                <Col l={2} m={2} s={2} />
                <Input l={4} m={4} s={4} className="departure"
                    label="flying From"
                    value={props.departure}
                    type="text"
                    name="departure"
                    placeholder="Airport Code (Required)"
                    onChange={props.handleInputChange}
                    icon="location_on"
                ></Input>

                <Input l={4} m={4} s={4} className="arrival"
                    label="flying To"
                    value={props.arrival}
                    type="text"
                    name="arrival"
                    placeholder="Airport Code (Required)"
                    onChange={props.handleInputChange}
                    icon="location_on"
                ></Input>
            </Row>

            <Row>
                <Col l={2} m={2} s={2} />
                <Input l={3} m={3} s={3} className="departureYear"
                    label="year"
                    value={props.year}
                    type="select"
                    name="year"
                    placeholder="Departure Year (Required)"
                    onChange={props.handleInputChange}
                    icon="calendar_today">
                    <option value='#'>Choose A Year</option>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                    <option value='2026'>2026</option>
                    <option value='2027'>2027</option>
                    <option value='2028'>2028</option>
                    <option value='2029'>2029</option>
                    <option value='2030'>2030</option>
                    <option value='2031'>2031</option>
                    <option value='2032'>2032</option>
                    <option value='2033'>2033</option>
                    <option value='2034'>2034</option>
                    <option value='2035'>2035</option>
                    <option value='2036'>2036</option>
                    <option value='2037'>2037</option>
                    <option value='2038'>2038</option>
                    <option value='2039'>2039</option>
                    <option value='2040'>2040</option>
                </Input>
                <Input l={3} m={3} s={3} className="departureMonth"
                    label="month"
                    value={props.month}
                    type="select"
                    name="month"
                    placeholder="Departure Month (Required)"
                    onChange={props.handleInputChange}
                    icon="calendar_today">
                    <option value='#'>Choose A Month</option>
                    <option value='1'>January</option>
                    <option value='2'>February</option>
                    <option value='3'>March</option>
                    <option value='4'>April</option>
                    <option value='5'>May</option>
                    <option value='6'>June</option>
                    <option value='7'>July</option>
                    <option value='8'>August</option>
                    <option value='9'>September</option>
                    <option value='10'>October</option>
                    <option value='11'>November</option>
                    <option value='12'>December</option>
                </Input>
                <Input l={2} m={2} s={2} className="departureDate"
                    label="date"
                    value={props.date}
                    type="select"
                    name="date"
                    placeholder="Departure Date (Required)"
                    onChange={props.handleInputChange}
                    icon="calendar_today">
                    <option value='#'>Choose A Date</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                    <option value='16'>16</option>
                    <option value='17'>17</option>
                    <option value='18'>18</option>
                    <option value='19'>19</option>
                    <option value='20'>20</option>
                    <option value='21'>21</option>
                    <option value='22'>22</option>
                    <option value='23'>23</option>
                    <option value='24'>24</option>
                    <option value='25'>25</option>
                    <option value='26'>26</option>
                    <option value='27'>27</option>
                    <option value='28'>28</option>
                    <option value='29'>29</option>
                    <option value='30'>30</option>
                    <option value='31'>31</option>
                </Input>
            </Row>
            <Row>
                <Col l={2} m={2} s={2} />
                <Col l={3} m={3} s={3}>
                    <Button type="submit" className="submitFlightBtn" onClick={props.handleFormSubmit}>
                        Search Flight
                    </Button>
                </Col>
                <Col l={6} m={6} s={6}>
                    <Button id="codesearch"> <a className="codeSearch" href="https://www.world-airport-codes.com/" target="_blank" rel="noopener noreferrer">Look up an airport code</a></Button>
                </Col>
            </Row>
        </>
    )
}

export default SearchFlightForm