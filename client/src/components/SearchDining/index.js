import React from "react";
import "./style.css";
import { Row, Input } from "react-materialize"


const SearchDining = props => {
    return (
        <container>
        <h1>Search dining</h1>
        <br></br>
        
        <form>
            <div className="form-group">
                <label className="DiningSearchTerm" id="dining"><p1>What would you like to find?</p1></label>
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
                <input className="col-12 form-control"
                    value={props.location}
                    type="text"
                    name="location"
                    placeholder="Enter your location here"
                    onChange={props.handleInputChange}
                />
            </div>
            <div>
                <button type="submit" id="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                    Submit
            </button>
            </div>
        </form>
    </container>
    )
}

export default SearchDining