import React from "react";
import "./style.css";
import { CardPanel } from 'react-materialize'
import {Container} from "../Grid"

const SubmittedActivity = props => {
    return (props.submittedActivities.length === 0) ? (
        <></>
    ) : (
            <>
                {props.submittedActivities.map(submittedActivity => {
                    return (
                        <Container>
                            <CardPanel className="teal lighten-4 black-text">
                                <span>
                                    <h6>Title: {submittedActivity.title}</h6>
                                    <p>Location: {submittedActivity.location}</p>
                                    <p>Date: {submittedActivity.date}</p>
                                    <p>Description: {submittedActivity.description}</p>
                                </span>
                            </CardPanel>
                        </Container>
                    )
                })}
            </>
        )
}
export default SubmittedActivity