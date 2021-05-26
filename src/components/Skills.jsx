import React from "react";

import Header from "./Header";
import StaticIcon from "./StaticIcon";

function Skills() {
    return (
        <div id="skills">
            <div className="skillDisplay">
                <Header text="Skills" />
                <div>
                    <StaticIcon icon="./images/icons/c++.png" alt="c++" />
                    <StaticIcon icon="./images/icons/c.png" alt="c" />
                    <StaticIcon icon="./images/icons/python.png" alt="python" />
                </div>
                <div>
                    <StaticIcon icon="./images/icons/html.png" alt="html" />
                    <StaticIcon icon="./images/icons/css.png" alt="css" />
                    <StaticIcon icon="./images/icons/sql.png" alt="sql" />
                </div>
                <div className="tools">
                    <StaticIcon icon="./images/icons/git.png" alt="git" />
                    <StaticIcon icon="./images/icons/flask.png" alt="flask" />
                    <StaticIcon icon="./images/icons/linux.png" alt="linux" />
                </div>
            </div>
        </div>
    );
}

export default Skills;