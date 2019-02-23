import React from "react";
import {Button, Icon} from "react-materialize";
import "./style.css";

const SearchFlightForm = props => {
    return (
        <container>
            <h1>Search for flights</h1>
            <br></br>
        <form class="form">
            <div className="row">
                <div className="form-group">
                    <label className="DepartureCity"><h5>Departure City</h5></label>
                    <input className="col-4 form-control"
                        value={props.departure}
                        type="text"
                        name="departure"
                        placeholder="Enter airort code"
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label className="DepartureCity"><h5>Arrival City</h5></label>
                        <input className="col-4 form-control"
                        value1={props.arrival}
                        type="text"
                        name="arrival"
                        placeholder="Enter airport code"
                        onChange={props.handleInputChange}
                    />
                </div>
            </div>
{/* link to lookup airport codes */}
                <div>
                <a id="codesearch" style={{display: "table-cell"}} href="https://www.world-airport-codes.com/" target="_blank">Look up an airport code</a>
                </div>
            <br></br>

            <div className="row">
                <div className="form-group" id="date">
                    <label className="DepartureYear"><h5>Departure Year</h5></label>
                    <input className="col-4 form-control"
                        value2={props.year}
                        type="text"
                        name="year"
                        placeholder="Departure Year"
                        onChange={props.handleInputChange}
                    />
                </div>
                
                <div className="form-group" id="date">
                    <label className="DepartureMonth"><h5>Departure Month </h5></label>
                    <br></br>
                    <input className="col-4 form-control"
                        value3={props.month}
                        type="text"
                        name="month"
                        placeholder="Depature Month (1-12)"
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="form-group" id="date">
                    <label className="DepartureDate"><h5>Departure Date </h5></label>
                    <input className="col-4 form-control"
                        value4={props.date}
                        type="text"
                        name="date"
                        placeholder="Departure Date (1-31)"
                        onChange={props.handleInputChange}
                    />
                </div>
            </div>
            <button type="submit" className="submitBtn btn btn-primary" id="submit" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    </container>
    )
}

export default SearchFlightForm