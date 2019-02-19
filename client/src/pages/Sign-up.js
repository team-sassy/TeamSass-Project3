import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import SignupForm from "../components/SignupForm";
import axios from "axios";
import { Redirect } from 'react-router-dom'


class Signup extends Component {
    //create state
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            confirmedPassword: "",
            redirectTo: null
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }


    //function to take value of what Xenter in the search bar
    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name
        // console.log (value,name)
        this.setState({
            [name]: value
        })
    }

    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("sign-up handleFormSubmit, username: ")
        console.log(this.state.username)
        axios.post("/user/", {
            username: this.state.username,
            password: this.state.password
        })
            .then(res => {
                console.log(res)
                if (!res.data.errmsg) {
                    console.log("successfully signed up")
                    this.setState({ redirectTo: "/login" })

                }
                else {
                    console.log("username already taken");
                }
            })
            .catch(err => console.log(err));
    }


    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <Container fluid>
                    <Container>
                        <Row>
                            <Col size="12">
                                <SignupForm
                                    handleFormSubmit={this.handleFormSubmit}
                                    handleInputChange={this.handleInputChange}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Container>
            )
        }

    }


}

export default Signup