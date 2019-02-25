import React, { Component } from "react";
// import { Row, Col } from "react-materialize";
import ActivitySubmitForm from "../components/ActivitySubmitForm";
import activityAPI from "../utils/activityAPI"
import swal from 'sweetalert'



class ActivitySubmit extends Component {
    //create state
    state = {
        title: "",
        location: "",
        date: "",
        time: "",
        description: "",
        activities: [],
        message: {}
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
        if (this.state.title && this.state.location && this.state.date) {
            activityAPI.saveActivity({
                title: this.state.title,
                location: this.state.location,
                date: this.state.date,
                time: this.state.time,
                description: this.state.description
            })
                .then(res => {
                    this.setState({
                        message: swal({
                            title: "This activity is saved to your itinerary",
                            icon: "success",
                            button: "Close"
                        })
                    })
                })
                // .then(this.cancelCourse())
                .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <>
                <ActivitySubmitForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
            </>
        )
    }


}

export default ActivitySubmit