import React from "react";

const currDate = new Date();

function Copyright(props) {
    return <p id="copyright">© {currDate.getFullYear()} {props.owner} </p>;
}

export default Copyright;