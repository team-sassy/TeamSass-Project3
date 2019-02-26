import React from "react";
import "./style.css";
import { Collection, CollectionItem, Button, Row, Col, Icon} from 'react-materialize'

const SavedDining = props => {
    console.log(props.savedDinings)
    return (props.savedDinings.length === 0) ? (
        <></>
    ) : (
            <Row>
                {props.savedDinings.map(savedDining => {
                    return (
                        <Col l={6} m={6} s={6}>
                            <Icon>restaurant</Icon>
                            <Collection key={savedDining.id} className=" red lighten-1 diningItem">
                                <CollectionItem className=" red lighten-1" >
                                    <Col l={7} m={7} s={7}>
                                        <h6><b>{savedDining.name}</b></h6>
                                        <p>Location: {savedDining.location}</p>
                                        <p>Rating: {savedDining.rating}</p>
                                        <p><a className="white-text" href={savedDining.link}>{savedDining.name}</a></p>
                                        <Button id={savedDining.id}
                                            className="deleteRestaurant">Delete</Button>
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
export default SavedDining