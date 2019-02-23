import React from "react";
import "./style.css";
import { Table, Button } from "react-materialize"

const ItineraryTable = props => {
    return (
        <container id="itinerarycontainer">
            <h1>Itinerary</h1>
            <br></br>

        <Table>
        <thead>
        <tr>
            <th data-field="date">Date</th>
            <th data-field="time">Time</th>
            <th data-field="description">Description</th>
            </tr>
        </thead>

        <tbody>
         <tr>
            <td>2/22/19</td>
            <td>10:36 pm</td>
            <td>Get to bed already!</td>
             </tr>
             </tbody>
        </Table>
        <br></br>

        <div>
        <Button id="new" waves='light'>Add new item to itinerary</Button>
        </div>
        </container>
        
    )
}

export default ItineraryTable