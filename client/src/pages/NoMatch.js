import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import Cards from "../components/Cards";
// import Modal from "../components/Modal";


class NoMatch extends Component {
    render() {
        return (
            <>
             <Jumbotron>
                <h1>Oops, there is no such page!!!!</h1>
             </Jumbotron>
            

            </>
         )
    }
}

export default NoMatch