import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import SignupForm from "../components/SignupForm";
import axios from "axios";


class Signup extends Component {
    //create state
    state = {
        username: "",
        password: "",
        confirmedPassword: ""
    };

    //function to take value of what enter in the search bar
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
        axios.post("/api/user", {
            username: this.state.username, 
            password: this.state.password
        })
            .then(res => {
                console.log (res)
                if (res.data.errmsg) {
                     console.log("username already taken");
                }
                else {
                    console.log("successfully signed up")
                    }
                    // reset the sate of the empty array to the new arrays of objects with properties geting back from the response
                    this.setState({ redicrect: "/login"})
            })
            .catch(err => console.log(err));
    }


    render() {
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

export default Signup