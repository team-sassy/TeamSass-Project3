import React from "react";
import "./style.css";
import { Button, Input, Row, Col } from "react-materialize";

const SignupForm = props => {
    return (
        <>
            <Row>
                <Col s={2} m={2} l={2} />
                <Col s={8} m={8} l={8}>
                    <h4> Sign-up</h4>
                </Col>
            </Row>
            <Row>
                <Col s={2} m={2} l={2} />
                <Input s={8} m={8} l={8} className="username"
                    label="username"
                    value={props.username}
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={props.handleInputChange}
                />
            </Row>
            <Row>
                <Col s={2} m={2} l={2} />
                <Input s={8} m={8} l={8} className="password"
                    label="password"
                    value={props.password}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={props.handleInputChange}
                />
            </Row >
            <Row>
                <Col s={2} m={2} l={2} />
                <Button type="submit" className="signupBtn" onClick={props.handleFormSubmit}>
                    Sign Up
            </Button>
            </Row>
        </>
    )
}

export default SignupForm