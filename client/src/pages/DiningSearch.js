import React, { Component } from "react";
import API from "../utils/diningAPI";
import { Container} from "react-materialize";
import SearchDining from "../components/SearchDining";
import SearchDiningResult from "../components/SearchDiningResult"
import swal from 'sweetalert'

class DiningSearch extends Component {
    //create state
    state = {
        term: "",
        location: "",
        restaurants: [],
        message: {}
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
        API.getDinings({
            term: this.state.term,
            location: this.state.location
        })
            .then(res => {
                if (res.data.businesses === "error") {
                    this.setState({
                        message: swal({
                            title: "Please fill in all fields",
                            icon: "warning",
                            button: "Close"
                        })
                    });
                    throw new Error(res.data.businesses);
                   
    }
                else {
    // console.log("it's clicked")
    // store response in a array
    let results = res.data.businesses
    //map through the array 
    results = results.map(result => {
        //store each dining information in a new object 
        result = {
            id: result.id,
            key: result.id,
            name: result.name,
            location: result.location.display_address,
            rating: result.rating,
            link: result.url,
            image: result.image_url
        }
        return result;
    })
    // reset the sate of the empty array to the new arrays of objects with properties geting back from the response
    this.setState({ restaurants: results })
}
            })
            .catch (err => console.log(err));
    }

handleSavedButton = event => {
    // console.log(event)
    event.preventDefault();
    console.log(this.state.restaurants)
    let savedDining = this.state.restaurants.filter(dining => dining.id === event.target.id)
    savedDining = savedDining[0];
    API.saveDining(savedDining)
        .then(savedDining => console.log(savedDining))
        .then(savedDining => this.setState({
            message: swal({
                title: "This restaurant is saved to your itinerary",
                icon: "success",
                button: "Close"
            })
        }))
        .catch(err => console.log(err))
}

render() {
    return (
        <>
            <SearchDining
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
            />
            <Container>
                <SearchDiningResult restaurants={this.state.restaurants}
                    handleSavedButton={this.handleSavedButton}
                />
            </Container>
        </>
    )
}
}

export default DiningSearch