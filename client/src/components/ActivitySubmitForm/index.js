import React from "react";
import "./style.css";
import {Button, Input, Row, Col } from "react-materialize"
import Footer from "../Footer"

const ActivitySubmitForm = props => {
    return (
        <>
            <Row className="headerRow">
                <Col l={2} m={2} s={2} />
                <Col l={6} m={6} s={6}>
                    <p className="diningSearchTerm">Share Your Fun Activity</p>
                </Col>
            </Row>
            <Row>
                <Col l={2} m={2} s={2} />
                <Input l={4} m={4} s={4} className="activityTitle"
                    label="Name your fun activity (required)"
                    value={props.title}
                    type="text"
                    name="title"
                    placeholder="Fun activity "
                    onChange={props.handleInputChange}
                    icon="chat"
                />
                <Input l={4} m={4} s={4} className="activityLocation"
                    label="Where to meet? (required)"
                    value={props.location}
                    type="text"
                    name="location"
                    placeholder="Provide location"
                    onChange={props.handleInputChange}
                    icon="location_on"
                />
            </Row>
            <Row>
                <Col l={2} m={2} s={2} />
                <Input l={4} m={4} s={4} className="activityDate"
                    label="When? (required)"
                    value={props.date}
                    type="date"
                    name="date"
                    placeholder="Provide Date"
                    onChange={props.handleInputChange}
                    icon="calendar_today"
                />

                <Input l={4} m={4} s={4} className="activityTime"
                    label="What time?"
                    value={props.time}
                    type="text"
                    name="time"
                    placeholder="Provide Time (Optional)"
                    onChange={props.handleInputChange}
                    icon="access_time"
                />
            </Row>
            <Row>
                <Col l={2} m={2} s={2} />
                <Input l={8} m={8} s={8} className="activityDescription"
                    label="Describe your fun activity"
                    value={props.description}
                    type="textarea"
                    name="description"
                    placeholder="Description (Optional)"
                    onChange={props.handleInputChange}
                    icon="description"
                />
            </Row>
            <Row>
                <Col l={2} m={2} s={2} />
                <Button type="submit" className="submitBtn" onClick={props.handleFormSubmit}> Submit</Button>
            </Row>
            <Footer />
        </>
    )
}

export default ActivitySubmitForm