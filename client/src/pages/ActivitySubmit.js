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
    };

    //function to take value of what enter in the search bar
    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name
        console.log (value,name)
        this.setState({
            [name]:value
        })
    }
    

    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
       console.log(this.state.location, this.state.time, this.state.description)
       let savedActivity = this.state.activities.filter(activity => activity._id === event.target._id)
        // once it clicks it connects to the google book api with the search value
        activityAPI.saveActivity(this.state.location, this.state.time, this.state.description)
            .then(res => {
                console.log (res)
                
            })
            .catch(err => this.setState({ error: err.scheduledFlights }));
    }

    // handleSavedButton = event => {
    //     // console.log(event)
    //     event.preventDefault();
    //     console.log(this.state.books)
    //     let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    //     savedBooks = savedBooks[0];
    //     API.saveBook(savedBooks)
    //         .then(this.setState({ message: alert("Your book is saved") }))
    //         .catch(err => console.log(err))
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

export default AddActivity