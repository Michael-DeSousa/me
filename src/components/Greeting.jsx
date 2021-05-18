import React from "react";

import ContactInfo from "./ContactInfo";
import Selfie from "./Selfie";

function Greeting() {
    return (
        <div>
            <Selfie />
            <h1 className="greeting">Hi, I'm Michael!</h1>
            <ContactInfo />
            <p className="bio">I'm a new Computer Engineering graduate from the University of California, Riverside and currently looking to start my career. 
            Feel free to take a look at my past projects and contact me if you think I'd make a good fit for your team. Thanks!</p>
        </div>
    ); 
}

export default Greeting;