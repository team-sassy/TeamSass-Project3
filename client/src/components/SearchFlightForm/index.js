import React from "react";
import "./style.css";

const SearchFlightForm = props => {
    return (
        <form>
            <div className="row">
                <div className="form-group">
                    <label className="DepartureCity"><h5>Departure City (Airport Code)</h5></label>
                    <br></br>
                    <input className="col-6 form-control"
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
                    <input className="col-6 form-control"
                        value1={props.arrival}
                        type="text"
                        name="arrival"
                        placeholder="Arrival City"
                        onChange={props.handleInputChange}
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group">
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
                <div className="form-group">
                    <label className="DepartureMonth"><h5>Departure Month (1-12)</h5></label>
                    <br></br>
                    <input className="col-4 form-control"
                        value3={props.month}
                        type="text"
                        name="month"
                        placeholder="Depature Month"
                        onChange={props.handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label className="DepartureDate"><h5>Departure Date (1-31)</h5></label>
                    <br></br>
                    <input className="col-4 form-control"
                        value4={props.date}
                        type="text"
                        name="date"
                        placeholder="Departure Date"
                        onChange={props.handleInputChange}
                    />
                </div>
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}

export default SearchFlightForm