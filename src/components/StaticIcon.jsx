import React from "react";

function StaticIcon(props) {
    return <img className="staticIcon" src={props.icon} alt={props.alt}/>;
}

export default StaticIcon;