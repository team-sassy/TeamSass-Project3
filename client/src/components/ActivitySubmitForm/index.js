import React from "react";
import "./style.css";
import {Modal, Button} from "react-materialize"

const ActivitySubmitForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="title"><h3>Title</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.title}
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={props.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="location"><h3>Location</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.location}
                    type="text"
                    name="location"
                    placeholder="Location"
                    onChange={props.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="DepartureCity"><h3>Time</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value1={props.time}
                    type="text"
                    name="time"
                    placeholder="Time"
                    onChange={props.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="DepartureCity"><h3>Description</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value1={props.description}
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={props.handleInputChange}
                />
            </div>
            <Modal
                onClick={props.handleFormSubmit}
                header='Activity Is Submitted'
                trigger={<Button type="submit" className="submitBtn btn btn-primary"> Submit</Button>}>
                <p>Your Activity Has Been Saved to Your Itinerary</p>
            </Modal>
        </form >
    )
}

export default ActivitySubmitForm