import React from "react";

import RoundLink from "./RoundLink"

function Card(props) {
    return (
        <div className="card">
            <a href={props.code}><img src={props.img} alt={props.alt}/></a>
            <div className="cardOverlay">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <ul className="cardTechStack">
                    <li>{props.bullet1}</li>
                    <li>{props.bullet2}</li>
                    <li>{props.bullet3}</li>
                </ul>
                <RoundLink link="https://github.com/" text="Source" />
                <RoundLink link="https://github.com/Michael-DeSousa" text="Demo" />
            </div>
        </div>
    );
}

export default Card;