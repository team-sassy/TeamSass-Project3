import React from "react";
import {Button, Icon} from "react-materialize";
import "./style.css";

const SearchFlightForm = props => {
    return (
        <form class="form">
            <div className="row">
                <div className="form-group">
                    <label className="DepartureCity"><h5>Departure City (Airport Code)</h5></label>
                    <br></br>
                    <input className="col-4 form-control"
                        value={props.departure}
                        type="text"
                        name="departure"
                        placeholder="Departure City"
                        onChange={props.handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label className="DepartureCity"><h5>Arrival City (Airport Code)</h5></label>
                    <br></br>
                    <input className="col-4 form-control"
                        value1={props.arrival}
                        type="text"
                        name="arrival"
                        placeholder="Arrival City"
                        onChange={props.handleInputChange}
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group" id="date">
                    <label className="DepartureYear"><h5>Departure Year</h5></label>
                    <br></br>
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
                    <br></br>
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
    )
}

export default SearchFlightForm