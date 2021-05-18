import React from "react";

function Selfie(props)
{
    return <img className="selfie" src={props.img} alt={props.alt}></img>;
}

export default Selfie;