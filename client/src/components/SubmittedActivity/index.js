import React from "react";
import "./style.css";
import { CardPanel, Icon, Button, Row, Col } from 'react-materialize'

const SubmittedActivity = props => {
    return (props.submittedActivities.length === 0) ? (
        <></>
    ) : (
            <>
                {props.submittedActivities.map(submittedActivity => {
                    return (
                        <>
                            <Icon>golf_course</Icon>
                            <CardPanel className="teal lighten-4 black-text activityCard">
                                <Row>
                                    <Col s={12} m={12} l={12}>
                                        <h4><b>{submittedActivity.title}</b></h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col s={2} m={2} l={2}>
                                        <Button id={submittedActivity.id}
                                            className="deleteActivity">Delete</Button>
                                    </Col>
                                    <Col s={4} m={4} l={4}>
                                        <h5><i><b>Where and when is the party?</b></i></h5>
                                        <p><i className="text-i">Address:</i> {submittedActivity.location}</p>
                                        <p><i className="text-i">Time:</i> {submittedActivity.time} {submittedActivity.date}</p>
                                    </Col>
                                    <Col s={6} m={6} l={6}>
                                        <h5><i><b>What fun are we having?</b></i></h5>
                                        <p>{submittedActivity.description}</p>
                                    </Col>
                                </Row>
                            </CardPanel>
                        </>
                    )
                })}
            </>
        )
}
export default SubmittedActivity