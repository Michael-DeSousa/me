import React from "react";

import Link from "./Link";
import Logo from "./Logo";

function Navbar() {
    return (
        <nav>
            <div className="navLeft">
                <Logo />
            </div>
            <div className="navRight">
                <ul className="navLinks">
                    <li><Link link="#About" title="About Me"/></li>
                    <li><Link link="#Projects" title="Projects"/></li>
                    <li><Link link="#Skills" title="Skills"/></li>
                    <li><Link link="#Contact" title="Contact Me"/></li>
                </ul> 
            </div> 
        </nav>
    );
}

export default Navbar;