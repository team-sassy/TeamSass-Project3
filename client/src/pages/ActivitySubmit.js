import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import ActivitySubmitForm from "../components/ActivitySubmitForm";
import activityAPI from "../utils/activityAPI"


class AddActivity extends Component {
    //create state
    state = {
        title: "",
        location: "",
        time: "",
        description: "",
        message: "",
        activities: []
    };

    //function to take value of what enter in the search bar
    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name
        // console.log(value, name)
        this.setState({
            [name]: value
        })
    }


    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
        // console.log(this.state.location, this.state.time, this.state.description)
        let savedActivity = this.state.activities.filter(activity => activity.name === event.target.name)
        savedActivity = savedActivity[0];
        activityAPI.saveActivity(savedActivity)
            .then(this.setState({ message: alert("your activity is saved") }))
            .catch(err => console.log(err));
    }


    render() {
        return (
            <Container fluid>
                <Container>
                    <Row>
                        <Col size="12">
                            <ActivitySubmitForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
            </Container>
        )
    }


}

export default AddActivity