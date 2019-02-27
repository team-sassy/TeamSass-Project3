import React from "react";
import "./style.css";
import { Collection, CollectionItem, Button, Row, Col, Container } from 'react-materialize'

const SearchPlaceResult = props => {
    return (props.restaurants.length === 0) ? (
        <></>
    ) : (
            <>
                <Container>
                    <Row>
                        {props.restaurants.map(restaurant => {
                            return (

                                <Col l={10} m={10} s={10} key={restaurant.id}>
                                    <Collection key={restaurant.id} className="lime lighten-4 diningItemResult">
                                        <CollectionItem className="lime lighten-4">
                                            <h5><b>{restaurant.name}</b></h5>
                                            <Row>
                                                <Col l={4} m={4} s={4}>
                                                    <p>Location: {restaurant.location}</p>
                                                    <p>Phone: {restaurant.phone}</p>
                                                    <Button id={restaurant.id} onClick={(id) => props.handleSavedButton(id)}
                                                        className="saveRestaurant">Save</Button>
                                                </Col>
                                                <Col l={2} m={2} s={2}>
                                                    <p>Rating: {restaurant.rating}</p>
                                                    <p><a className="blue-text" href={restaurant.link}>Website</a></p>

                                                </Col>
                                                <Col l={6} m={6} s={6}>
                                                    <img className="restaurant_image" alt={restaurant.name} src={restaurant.image} />
                                                </Col>
                                            </Row>

                                        </CollectionItem>
                                    </Collection>
                                </Col>

                            )
                        })}
                    </Row>
                </Container>
            </>
        )
}
export default SearchPlaceResult