import React from "react";
import "./style.css";
import {Row, Col} from "../Grid"

const SearchDiningResult = props => {
    return (props.restaurants.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Restaurant Results</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Search Results</h3>
                        {props.restaurants.map(restaurant => {
                            return (
                                <li className="search-list list-group-item">
                                    <Row className="SearchResult row" id={restaurant.name+ "Card"}>
                                        {/* col-9 show information of the book */}
                                        <Col size="12" className="bookInfo">
                                            <Row>
                                                <h3 className="restaurant_name">{restaurant.name}</h3>
                                            </Row>
                                            <Row>
                                                <h4 className="restaurant_location">{restaurant.location}</h4>
                                            </Row>
                                            <Row>
                                                <p className="restaurant_rating">{restaurant.rating}</p>
                                            </Row>
                                            <Row>
                                                <p className="restaurant_url">{restaurant.url}</p>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    {/* <Row className="buttonDiv ">
                                        <button className="saveBook btn btn-primary" id={flight.flightNumber} onClick={(event) => props.handleSavedButton(event)}>
                                            Save Flight
                                        </button>
                                    </Row> */}
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default SearchDiningResult