import React from "react";
// import "./style.css";
// import Beach from "../../images/"
import {Card,CardTitle} from "react-materialize";





function HomeCard1 () {
    return (
        <>
        <div className="card-container" > 
            <Card className='small'
                header={<CardTitle image='./images/chicago.jpg'>Chicago</CardTitle>}
                actions={[<a href=''>Chicago</a>]}>
                I am a very simple card. I am good at containing small bits of information. 
               
            </Card>
            <Card  id="card2" className='small'
                header={<CardTitle image='client/src/images/japan.jpg'>Madrid</CardTitle>}
                actions={[<a href='#'>Madrid</a>]}>
                I am a very simple card. I am good at containing small bits of information. 
             
            </Card>
            <Card id="card3"className='small'
                header={<CardTitle image='img/sample-1.jpg'>Japan</CardTitle>}
                actions={[<a href='#'>Japan</a>]}>
                I am a very simple card. I am good at containing small bits of information. 
             
            </Card>

      
        </div>
      
    
        </>


    );
}


export default HomeCard1;

