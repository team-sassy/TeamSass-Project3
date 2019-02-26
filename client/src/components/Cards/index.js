import React from "react";
// import "./style.css";
import {Card,CardTitle} from "react-materialize";
import Madridpic from '../../images/madrid.jpg';
import Sydneypic from '../../images/sydney.jpg';
import Cancunpic from '../../images/cancun.jpg';
import Parispic from '../../images/paris.jpg'

function HomeCard1 () {
    return (
        <>
        <div className="card-container" > 

            <Card  id="card2" className='small'
                header={<CardTitle image={Madridpic}></CardTitle>}
                actions={[<a href='https://www.tripadvisor.com/Tourism-g187514-Madrid-Vacations.html'>More info - Madrid</a>]}>
               Try some tapas in Madrid, catch a flamenco show, enjoy some Cava. 
             
            </Card>
            <Card  id="card2" className='small'
                header={<CardTitle image={Sydneypic}></CardTitle>}
                actions={[<a href='https://www.tripadvisor.com/Tourism-g255060-Sydney_New_South_Wales-Vacations.html'>More info - Sydney</a>]}>
                Visit the land down under, hop around with the roos. Eat shrimp on the barbie.  
             
            </Card>
            <Card  id="card2" className='small'
                header={<CardTitle image={Cancunpic}></CardTitle>}
                actions={[<a href='https://www.tripadvisor.com/Tourism-g150807-Cancun_Yucatan_Peninsula-Vacations.html'>More info - Cancun</a>]}>
                Enjoy some sun and wash away the stress on a beautful beach. 
             
            </Card>
            <Card  id="card2" className='small'
                header={<CardTitle image={Parispic}></CardTitle>}
                actions={[<a href='https://www.tripadvisor.com/Tourism-g187147-Paris_Ile_de_France-Vacations.html'>More info - Paris</a>]}>
                Explore the city of lights and do as the parisians do.
             
            </Card>
        </div>
        {/* <div className="card-container" > 

            <Card  id="card2" className='small'
                header={<CardTitle image={Madridpic}></CardTitle>}
                actions={[<a href='https://www.tripadvisor.com/Tourism-g187514-Madrid-Vacations.html'>More info - Madrid</a>]}>
               Try some tapas in Madrid, catch a flamenco show, enjoy some Cava. 
             
            </Card>
            <Card  id="card2" className='small'
                header={<CardTitle image={Sydneypic}></CardTitle>}
                actions={[<a href='https://www.tripadvisor.com/Tourism-g255060-Sydney_New_South_Wales-Vacations.html'>More info - Sydney</a>]}>
                Visit the land down under, hop around with the roos. Eat shrimp on the barbie.  
             
            </Card>
            <Card  id="card2" className='small'
                header={<CardTitle image={Cancunpic}></CardTitle>}
                actions={[<a href='https://www.tripadvisor.com/Tourism-g150807-Cancun_Yucatan_Peninsula-Vacations.html'>More info - Cancun</a>]}>
                Enjoy some sun and wash away the stress on a beautful beach. 
             
            </Card>
            <Card  id="card2" className='small'
                header={<CardTitle image={Parispic}></CardTitle>}
                actions={[<a href='https://www.tripadvisor.com/Tourism-g187147-Paris_Ile_de_France-Vacations.html'>More info - Paris</a>]}>
                Explore the city of lights and do as the parisians do.
             
            </Card>
        </div> */}
      
    
        </>


    );
}


export default HomeCard1;

