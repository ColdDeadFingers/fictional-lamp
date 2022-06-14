import React from "react";
import Cards from "./Cards";
import "./style.scss";
import data from "./data.js";

export default function App(){
    const cardComponents = data.map(card => <Cards key={card.id} {...card} />);

    return (
        <div className="App">
        {cardComponents}
        </div> 
    );
}