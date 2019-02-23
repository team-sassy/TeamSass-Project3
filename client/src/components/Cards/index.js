import React from "react";
// import "./style.css";
// import Beach from "../../images/"
import {Card,CardTitle} from "react-materialize";
import HotelPic2 from '../../images/hotelpic2.jpg';
// import FlightPic1 from '../../images/flightpic1.jpg';
import DiningPic1 from '../../images/diningpic1.jpg';


function HomeCard1 () {
    return (
        <>
        <div className="card-container" > 
{/*             
            <Card  id="card2" className='small'
                header={<CardTitle image={FlightPic1}>Search Flights</CardTitle>}
                actions={[<a href=''>Madrid</a>]}>
                The images can be changed to better serve the functionaily. 
             
            </Card> */}
            <Card  id="card2" className='small'
                header={<CardTitle image={HotelPic2}>Flights</CardTitle>}
                actions={[<a href='/flight'>Search Flights</a>]}>
                Ready to unwind? Click the search hotels link to find your perfect overnight stay. 
             
            </Card>
            <Card  id="card2" className='small'
                header={<CardTitle image={DiningPic1}>Dining</CardTitle>}
                actions={[<a href='/dining'>Dinning</a>]}>
                Find your favorite. 
             
            </Card>
            {/* <Card  id="card2" className='small'
                header={<CardTitle image={DiningPic1}>Search Dining</CardTitle>}
                actions={[<a href=''>Madrid</a>]}>
                I am a very simple card. I am good at containing small bits of information. 
             
            </Card> */}
        </div>
      
    
        </>


    );
}


export default HomeCard1;

