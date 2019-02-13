import React, { Component } from "react";
import API from "../utils/diningAPI.js";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
// import SearchForm from "../components/SearchForm";
// import SearchResult from "../components/SearchResult"

class SerachDining extends Component {
    //create state
    state = {
        search: "",
        location: "",
        error: "",
        message: ""
    };

    //function to take value of what enter in the search bar
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
        // once it clicks it connects to the google book api with the search value
        API.getYelp(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    // store response in a array
                    let results = res.data.items
                    //map through the array 
                    results = results.map(result => {
                        //store each dining information in a new object 
                        result = {
                            // name: result.id,
                            // id: result.id,
                            name: result.name,
                            location: result.location.display-address,
                            rating: result.rating,
                            link: result.url
                        }
                        return result;
                    })
                    // reset the sate of the empty array to the new arrays of objects with properties geting back from the response
                    this.setState({ dining: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state.dining)
        let savedDining = this.state.dining.filter(dining => dining.id === event.target.id)
        savedDining = savedDining[0];
        API.savedDining(savedDining)
            .then(this.setState({ message: alert("Your dining selection is saved") }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-white">Find dining options near you</h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <SearchResult dining={this.state.dining} handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
        )
    }


}

export default SerachDining