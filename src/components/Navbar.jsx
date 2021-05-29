import React from "react";

import Link from "./Link";
import Logo from "./Logo";

function Navbar() {
    return (
        <nav id="top">
            <div className="navLeft">
                <Logo />
            </div>
            <div className="navRight">
                <ul className="navLinks">
                    <li><Link link="#about" title="About Me"/></li>
                    <li><Link link="#projects" title="Projects"/></li>
                    <li><Link link="#skills" title="Skills"/></li>
                    <li><Link link="#resume" title="Resume"/></li>
                    <li><Link link="#contact" title="Contact Me"/></li>
                </ul> 
            </div> 
        </nav>
    );
}

export default Navbar;