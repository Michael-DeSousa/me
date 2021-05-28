import React from "react";

import BodyText from "./BodyText";
import ContactInfo from "./ContactInfo";
import Header from "./Header";
import Selfie from "./Selfie";

function Intro() {
    return (
        <div id="about">
            <Selfie img="images/selfie.jpg" alt="Michael De Sousa" />
            <Header text="Hi, I'm Michael!" />
            <ContactInfo />
            <BodyText text="I'm a new graduate from the University of California, Riverside Computer Engineering program. I'm currently located in Fontana, California and excited to start my career! I'm most comfortable working in C/C++ as well as with embedded systems.
            Feel free to take a look at my projects and contact me if you think I'd make a good fit for your team. Thanks!" />
        </div>
    ); 
}

export default Intro;