import React from "react";
import "./style.css";
import { Collection, CollectionItem, Button, Row, Col} from 'react-materialize'

const SearchDiningResult = props => {
    return (props.restaurants.length === 0) ? (
        <></>
    ) : (
            <Row>
                {props.restaurants.map(restaurant => {
                    return (
                        <Col l={6} m={6} s={6}>
                            <Collection key={restaurant.id} className="red lighten-1 diningItemResult">
                                <CollectionItem className="red lighten-1">
                                    <Col l={7} m={7} s={7}>
                                        <h6><b>{restaurant.name}</b></h6>
                                        <p>Location: {restaurant.location}</p>
                                        <p>Rating: {restaurant.rating}</p>
                                        <p><a href={restaurant.link}>{restaurant.name}</a></p>
                                        <Button id={restaurant.id} onClick={(id) => props.handleSavedButton(id)}
                                            className="saveRestaurant">Save</Button>
                                    </Col>
                                    <Col l={5} m={5} s={5}>
                                        <img className="restaurant_image" alt={restaurant.name} src={restaurant.image} />
                                    </Col>
                                </CollectionItem>
                            </Collection>
                        </Col>
                    )
                })}
            </Row>
        )
}
export default SearchDiningResult