import React from "react";

import Copyright from "./Copyright";
import Link from "./Link";

function Footer() {
    return (
        <footer>
            <Link link="https://github.com/Michael-DeSousa" title="Personal Site" />
            <Link link="https://linkedin.com/in/michaeldesous" title="LinkedIn" />
            <Link link="https://github.com/Michael-DeSousa" title="Github" />
            <Link link="https://www.youtube.com/channel/UClsx7TW67_bn4qIA1TevRsg" title="Youtube" />
            <Copyright owner="Michael De Sousa" />
        </footer>
    );
}

export default Footer;