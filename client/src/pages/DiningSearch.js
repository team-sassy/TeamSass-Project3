import React, { Component } from "react";
import API from "../utils/diningAPI.js";
import { Container, Row, Col } from "../components/Grid";
import SearchDining from "../components/SearchDining";
import SearchDiningResult from "../components/SearchDiningResult"


class DiningSearch extends Component {
    //create state
    state = {
        term: "",
        location: "",
        error: "",
        message: "",
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
        // once it clicks it connects to the google book api with the search value
        API.getYelp(this.state.term, this.state.location)
            .then(res => {
                if (res.data.businesses === "error") {
                    throw new Error(res.data.businesses);
                }
                else {
                    // store response in a array
                    let results = res.data.businesses
                    //map through the array 
                    results = results.map(result => {
                        //store each dining information in a new object 
                        result = {
                            // name: result.id,
                            // id: result.id,
                            name: result.name,
                            location: result.location.display_address,
                            rating: result.rating,
                            link: result.url
                        }
                        return result;
                    })
                    // reset the sate of the empty array to the new arrays of objects with properties geting back from the response
                    this.setState({ restaurants: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    // handleSavedButton = event => {
    //     // console.log(event)
    //     event.preventDefault();
    //     console.log(this.state.dining)
    //     let savedDining = this.state.dining.filter(dining => dining.id === event.target.id)
    //     savedDining = savedDining[0];
    //     API.savedDining(savedDining)
    //         .then(this.setState({ message: alert("Your dining selection is saved") }))
    //         .catch(err => console.log(err))
    // }
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