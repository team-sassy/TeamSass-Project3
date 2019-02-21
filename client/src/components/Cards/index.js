import React from "react";
// import "./style.css";
// import Beach from "../../images/"
import {Card,CardTitle} from "react-materialize";

import MadridPic from '../../images/madrid.jpg'
import JapanPic from '../../images/japan.jpg'

function HomeCard1 () {
    return (
        <>
        <div className="card-container" > 
            
            <Card  id="card2" className='small'
                header={<CardTitle image={MadridPic}>Madrid</CardTitle>}
                actions={[<a href=''>Madrid</a>]}>
                The images can be changed to better serve the functionaily. 
             
            </Card>
            <Card  id="card2" className='small'
                header={<CardTitle image={JapanPic}>Japan</CardTitle>}
                actions={[<a href=''>Madrid</a>]}>
                I am a very simple card. I am good at containing small bits of information. 
             
            </Card>
        </div>
      
    
        </>


    );
}


export default HomeCard1;

