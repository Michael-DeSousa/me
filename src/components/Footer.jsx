import React from "react";

const currDate = new Date();

function Footer() {
    return (
        <footer>
            <a href="https://github.com/Michael-DeSousa">Personal Site</a>
            <a href="https://linkedin.com/in/michaeldesous">LinkedIn</a>
            <a href="https://github.com/Michael-DeSousa">Github</a>
            <a href="https://www.youtube.com/channel/UClsx7TW67_bn4qIA1TevRsg">Youtube</a>
            <p id="copyright">© {currDate.getFullYear()} Michael De Sousa</p>
        </footer>
    );
}

export default Footer;