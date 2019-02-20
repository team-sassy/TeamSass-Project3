import React from "react";
import "./style.css";

const SignupForm = props => {
    return (
        <form>
            <div className="SignupForm">
                <h4>Sign up</h4>
                <label className="Username"><h4>Username</h4></label>
                <br></br>
                <input className="col-6 form-control"
                    value={props.username}
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={props.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="Password"><h4>Password</h4></label>
                <br></br>
                <input className="col-6 form-control"
                    value1={props.password}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Sign Up
            </button>
        </form>
    )
}

export default SignupForm