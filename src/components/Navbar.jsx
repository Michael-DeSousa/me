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
                    <li><Link href="#About" title="About Me"/></li>
                    <li><Link href="#Projects" title="Projects"/></li>
                    <li><Link href="#Skills" title="Skills"/></li>
                    <li><Link href="#Contact" title="Contact Me"/></li>
                </ul> 
            </div> 
        </nav>
    );
}

export default Navbar;