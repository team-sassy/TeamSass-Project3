import React from "react";
import "./style.css";
import { Row, Col, Input, Button} from "react-materialize"


const SearchPlace = props => {
    return (
        <>
            <Row className="headerRow">
                <Col l={2} m={2} s={2} />
                <Col l={6} m={6} s={6}>
                    <p className="diningSearchTerm">Find Places Near You</p>
                </Col>
            </Row>
            <Row>
                <Col l={2} m={2} s={2} />
                
                <Input l={4} m={4} s={4} className="location"
                    label="your location"
                    value={props.location}
                    type="text"
                    name="location"
                    placeholder=""
                    onChange={props.handleInputChange}
                    icon="location_on"
                />
                <Input l={4} m={4} s={4} className="term"
                    label = "hotel, museum, movie theatre, bar"
                    value={props.term}
                    type="text"
                    name="term"
                    placeholder=""
                    onChange={props.handleInputChange}
                    icon = "location_city"
                />
                <Col l={2} m={2} s={2} />
            </Row>
            <Row>
                <Col l={2} m={2} s={2} />
                <Button type="submit" className="submitDiningBtn" onClick={props.handleFormSubmit}>
                    Find Place
                </Button>
            </Row>
        </>
    )
}

export default SearchPlace