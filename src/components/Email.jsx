import React from "react";

function Email(props) {
    return <a className="email" href="mailto:{props.email}">{props.email}</a>
}

export default Email;