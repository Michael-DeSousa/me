import React from "react";

import ClickIcon from "./ClickIcon";
import Email from "./Email";
import Resume from "./Resume";

function ContactInfo() {
    return (
        <div className="contactInfo">
                <Email email="michael.desous@gmail.com" />
                <Resume />
                <div className="contactIcons">
                    <ClickIcon link="https://github.com/Michael-DeSousa" icon="./images/icons/github.png" alt="Github Logo" />
                    <ClickIcon link="https://www.linkedin.com/in/michaeldesous" icon="./images/icons/linkedin.png" alt="LinkedIn Logo" />
                    <ClickIcon link="https://www.youtube.com/channel/UClsx7TW67_bn4qIA1TevRsg" icon="./images/icons/youtube.png" alt="LinkedIn Logo" />
                </div>
        </div>
    );
}

export default ContactInfo;