import React from "react";
import "./style.css";
import { Col, Row, Card, CardTitle, Button } from 'react-materialize'

const SearchDiningResult = props => {
    return (props.restaurants.length === 0) ? (
        <></>
    ) : (
            <>
                {props.restaurants.map(restaurant => {
                    return (
                        <Card className ="place-card"
                            header={< CardTitle reveal image={restaurant.image} waves='light' />}
                            title={restaurant.name}
                            reveal={<>
                                <p>Name: {restaurant.name}</p>
                                <p>Location: {restaurant.location}</p>
                                <p>Rating: {restaurant.rating}</p>
                                <Button waves='light' className="saveBook btn btn-primary" id={restaurant.id} onClick={(event) => props.handleSavedButton(event)}>Save</Button>
                            </>}>
                            <p><a href={restaurant.link}>{restaurant.name}</a></p>
                            <br></br>
                        </Card >
                        
                    )
                })}
            </>
        )
}
export default SearchDiningResult