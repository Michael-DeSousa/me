import React from "react";

import RoundLink from "./RoundLink";

function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt={props.alt}/>
            <div className="cardOverlay">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <ul className="cardTechStack">
                    <li>{props.bullet1}</li>
                    <li>{props.bullet2}</li>
                    <li>{props.bullet3}</li>
                </ul>
                <RoundLink link={props.source} text="Source" />
                <RoundLink link={props.demo} text="Demo" />
            </div>
        </div>
    );
}

export default Card;