import React from "react";
// import "./style.css";
import {Card,CardTitle} from "react-materialize";





function HomeCard1 () {
    return (
        <>
        <Card className='small'
        header={<CardTitle image='beach-1.jpg'>Card Title</CardTitle>}
        actions={[<a href='#'>This is a Link</a>]}>
        I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
        </Card>
    
        </>


    );
}


export default HomeCard1;

