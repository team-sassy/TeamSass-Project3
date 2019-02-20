import React from "react";
import "./style.css";
import {Row, Col} from "../Grid"

const SearchDiningResult = props => {
    return (props.restaurants.length === 0) ? (
        <div className="card"></div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Search Results</h3>
                        {props.restaurants.map(restaurant => {
                            return (
                                <li className="search-list list-group-item" key={restaurant.key}>
                                    <Row className="SearchResult row" id={restaurant.name+ "Card"}>
                                        <Col size="3" className="ResImage">
                                            <img src={restaurant.image} alt={restaurant.name} />
                                        </Col>
            
                                        {/* col-9 show information of the book */}
                                        <Col size="9" className="ResInfo">
                                            <Row>
                                                <h4 className="restaurant_name">Name: {restaurant.name}</h4>
                                            </Row>
                                            <Row>
                                                <h5 className="restaurant_location">Location: {restaurant.location}</h5>
                                            </Row>
                                            <Row>
                                                <p className="restaurant_rating">Rating: {restaurant.rating}</p>
                                            </Row>
                                            <Row>
                                                <a className="restaurant_url" href={restaurant.link} target="_blank">Link: {restaurant.name}</a>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row className="buttonDiv ">
                                        <button className="saveBook btn btn-primary" id={restaurant.id} onClick={(event) => props.handleSavedButton(event)}>
                                            Save Place
                                        </button>
                                    </Row>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default SearchDiningResult