import React from "react";

function ContactInfo() {
    return (
        <div id="contactInfo">
                <a className="email" href="mailto:michael.desous@gmail.com">michael.desous@gmail.com</a>
                <div className="contactIcons">
                    <a href="https://github.com/Michael-DeSousa"><img className="contactIcon" src="./images/github.png" alt="Github Logo"/></a>
                    <a href="https://www.linkedin.com/in/michaeldesous"><img className="contactIcon" src="./images/linkedin.png" alt="LinkedIn Logo"/></a>
                    <a href="https://www.youtube.com/channel/UClsx7TW67_bn4qIA1TevRsg"><img className="contactIcon" src="./images/youtube.png" alt="LinkedIn Logo"/></a>
                </div>
        </div>
    );
}

export default ContactInfo;