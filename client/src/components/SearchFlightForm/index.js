import React from "react";
import "./style.css";

const SearchFlight = props => {
    return (
        <form>
            <div className="form-group">
                <label className="DepartureCity"><h3>Departure City</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.departureCity}
                    type="text"
                    name="departureCity"
                    placeholder="Departure City"
                    onChange={props.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="DepartureCity"><h3>Arrival City</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.arrivalCity}
                    type="text"
                    name="arrivalCity"
                    placeholder="Arrival City"
                    onChange={props.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="DepartureCity"><h3>Departure Time</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.departureTime}
                    type="text"
                    name="departureTime"
                    placeholder="Departure Time"
                    onChange={props.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="DepartureCity"><h3>Arrival Time</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.arrivalTime}
                    type="text"
                    name="arrivalTime"
                    placeholder="Arrival Time"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}

export default SearchFlight