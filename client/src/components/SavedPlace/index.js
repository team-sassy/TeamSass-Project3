import React from "react";
import "./style.css";
import { Collection, CollectionItem, Button, Row, Col, Icon} from 'react-materialize'

const SavedPlace = props => {
    console.log(props.savedDinings)
    return (props.savedDinings.length === 0) ? (
        <></>
    ) : (
            <Row>
                {props.savedDinings.map(savedDining => {
                    return (
                        <Col l={10} m={10} s={10}>
                            <Icon >location_city</Icon>
                            <Collection key={savedDining.id} className=" lime lighten-4 diningItem">
                                <CollectionItem className=" lime lighten-4" >
                                    <Col l={7} m={7} s={7}>
                                        <h6><b>{savedDining.name}</b></h6>
                                        <p>Location: {savedDining.location}</p>
                                        <p>Phone: {savedDining.phone}</p>
                                        <p>Rating: {savedDining.rating}</p>
                                        <p><a className="white-blue" href={savedDining.link}>{savedDining.name}</a></p>
                                        <Button id={savedDining._id} onClick={() => props.deletePlaceButton(savedDining._id)}
                                            className="deleteRestaurant"><Icon>delete_forever</Icon></Button>
                                    </Col>
                                    <Col l={5} m={5} s={5}>
                                        <img className="restaurant_image" alt={savedDining.name} src={savedDining.image} />
                                    </Col>
                                </CollectionItem>
                            </Collection>
                        </Col>
                    )
                })}
            </Row>
        )
}
export default SavedPlace