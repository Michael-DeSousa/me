import React from "react";

function RoundLink(props)
{
    return <a className="roundLink" href={props.link}>{props.text}</a>
}

export default RoundLink;