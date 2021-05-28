import React from "react";

function ClickIcon(props) {
    return <a href={props.link}><img className="contactIcon" src={props.icon} alt={props.alt}/></a>;
}

export default ClickIcon;