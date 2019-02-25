import React from "react";
import "./style.css";
import { Row, Col, Input, Button, Icon} from "react-materialize"


const SearchDining = props => {
    return (
        <>
            <Row className="headerRow">
                <Col l={2} m={2} s={2} />
                <Col l={6} m={6} s={6}>
                    <p className="diningSearchTerm">Find Restaurant Near Your Location</p>
                </Col>
            </Row>
            <Row>
                <Col l={2} m={2} s={2} />
                
                <Input l={4} m={4} s={4} className="location"
                    value={props.location}
                    type="text"
                    name="location"
                    placeholder="Street, Address, State, City"
                    onChange={props.handleInputChange}
                ><Icon>location_on</Icon></Input>
                <Input l={4} m={4} s={4} className="term"
                    value={props.term}
                    type="text"
                    name="term"
                    placeholder="Pizza, sushi, american..."
                    onChange={props.handleInputChange}
                ><Icon>search</Icon></Input>
                <Col l={2} m={2} s={2} />
            </Row>
            <Row>
                <Col l={2} m={2} s={2} />
                <Button type="submit" className="submitDiningBtn" onClick={props.handleFormSubmit}>
                    Find Restaurant
                </Button>
            </Row>
        </>
    )
}

export default SearchDining