import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import ActivitySubmitForm from "../components/ActivitySubmitForm";
import activityAPI from "../utils/activityAPI"


class ActivitySubmit extends Component {
    //create state
    state = {
        title: "",
        location: "",
        time: "",
        description: "",
        message: "",
        activities: []
    };
    componentDidMount() {
        this.loadActivity();
    }

    loadActivity = () => {
        activityAPI.getActivity()
            .then(res =>
                this.setState({
                    activities: res.data,
                    title: "",
                    location: "",
                    time: "",
                    description: "",
                    message: ""
                })
            )
            .catch(err => console.log(err))
    }

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
        if (this.state.title && this.state.location && this.state.time) {
            activityAPI.saveActivity({
                title: this.state.title,
                location: this.state.location,
                time: this.state.time,
                desctiption: this.state.description
            })
                .then(res => {
                    console.log("Omg is this working")
                    this.setState({
                        message: alert("your activity has been saved"),
                    });
                })
                // .then(this.cancelCourse())
                .catch(err => console.log(err));
        }
    }

    // cancelCourse = () => {
    //     this.setState({
    //         title: "",
    //         location: "",
    //         time: "",
    //         description: ""
    //     });
    // }


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

export default ActivitySubmit