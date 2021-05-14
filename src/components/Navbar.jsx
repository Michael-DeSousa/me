import React from "react"

function Navbar() {
    return <nav>
            <div className="navLeft">
                <h1 className="myName">Michael De Sousa</h1>
                <h3 className="jobTitle">Software Engineer</h3>
            </div>
            <div className="navRight">
                <ul className="navLinks">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About Me</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Contact">Contact Me</a></li>
                </ul> 
            </div> 
    </nav>;
}

/* TODO: USE PROPS FOR THE LINKS */

export default Navbar;