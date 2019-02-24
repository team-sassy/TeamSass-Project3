import React from "react";
import "./style.css";
import { Collection, CollectionItem, Button, Row, Col} from 'react-materialize'

const SearchDiningResult = props => {
    return (props.restaurants.length === 0) ? (
        <></>
    ) : (
            <>
                {props.restaurants.map(restaurant => {
                    return (
                        <Collection key={restaurant.id}>
                            <CollectionItem >
                                <Row>
                                    <Col m={8}>
                                        <h5><b>{restaurant.name}</b></h5>
                                        <p>Location: {restaurant.location}</p>
                                        <p>Rating: {restaurant.rating}</p>
                                        <p><a href={restaurant.link}>{restaurant.name}</a></p>
                                        <Button waves='light' className="saveBook btn btn-primary" id={restaurant.id} onClick={props.handleSavedButton}>
                                            Save Restaurant
                                        </Button>
                                    </Col>
                                    <Col m={4}>
                                        <img className="restaurant_image" alt={restaurant.name} src={restaurant.image} />
                                    </Col>
                                </Row>

                            </CollectionItem>
                        </Collection>
                    )
                })}
            </>
        )
}
export default SearchDiningResult