import React from "react";
import "./style.css";

const SearchDining = props => {
    return (
        <form>
            <div className="form-group">
                <label className="DiningSearchTerm"><h3>What would you like to find?</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.term}
                    type="text"
                    name="term"
                    placeholder="Search for dining"
                    onChange={props.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="Location"><h3>Enter your location</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.location}
                    type="text"
                    name="location"
                    placeholder="Enter your location here"
                    onChange={props.handleInputChange}
                />
            </div>

            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}

export default SearchDining