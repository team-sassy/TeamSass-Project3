import React from "react";
import "./style.css";

const SearchFlightForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="DepartureCity"><h3>Departure City (Airport Code)</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.departure}
                    type="text"
                    name="departure"
                    placeholder="Departure City"
                    onChange={props.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="DepartureCity"><h3>Arrival City (Airport Code)</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value1={props.arrival}
                    type="text"
                    name="arrival"
                    placeholder="Arrival City"
                    onChange={props.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="DepartureYear"><h3>Departure Year</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value2={props.year}
                    type="text"
                    name="year"
                    placeholder="Departure Year"
                    onChange={props.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="DepartureMonth"><h3>Departure Month (1-12)</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value3={props.month}
                    type="text"
                    name="month"
                    placeholder="Depature Month"
                    onChange={props.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="DepartureDate"><h3>Departure Date (1-31)</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value4={props.date}
                    type="text"
                    name="date"
                    placeholder="Departure Date"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}

export default SearchFlightForm