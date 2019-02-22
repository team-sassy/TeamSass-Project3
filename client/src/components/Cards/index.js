import React from "react";
// import "./style.css";
// import Beach from "../../images/"
import {Card,CardTitle} from "react-materialize";
import HotelPic1 from '../../images/';
import FlightPic1 from '../../images/';
import DiningPic1 from '../../images/';


function HomeCard1 () {
    return (
        <>
        <div className="card-container" > 
            
            <Card  id="card2" className='small'
                header={<CardTitle image={FlightPic1}>Search Flights</CardTitle>}
                actions={[<a href=''>Madrid</a>]}>
                The images can be changed to better serve the functionaily. 
             
            </Card>
            <Card  id="card2" className='small'
                header={<CardTitle image={HotelPic1}>Search Hotels</CardTitle>}
                actions={[<a href=''>Madrid</a>]}>
                I am a very simple card. I am good at containing small bits of information. 
             
            </Card>
            <Card  id="card2" className='small'
                header={<CardTitle image={DiningPic1}>Search Dining</CardTitle>}
                actions={[<a href=''>Madrid</a>]}>
                I am a very simple card. I am good at containing small bits of information. 
             
            </Card>
        </div>
      
    
        </>


    );
}


export default HomeCard1;

