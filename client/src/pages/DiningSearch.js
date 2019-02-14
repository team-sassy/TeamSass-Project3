import React, { Component } from "react";
import API from "../utils/diningAPI";
import { Container, Row, Col } from "../components/Grid";
import SearchDining from "../components/SearchDining";
import SearchDiningResult from "../components/SearchDiningResult"


class DiningSearch extends Component {
    //create state
    state = {
        term: "",
        location: "",
        restaurants: []
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
                    throw new Error(res.data.businesses);
                }
                else {
                    console.log("it's clicked")
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
                    this.setState({ restaurants: results})
                }
            })
            .catch(err => console.log(err));
    }

    handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state.restaurants)
        let savedDining = this.state.restaurants.filter(dining => dining.id === event.target.id)
        savedDining = savedDining[0];
        API.saveDining(savedDining)
            .then(this.setState({ message: alert("Your dining selection is saved") }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchDining
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <SearchDiningResult restaurants={this.state.restaurants} handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
        )
    }


}

export default DiningSearch