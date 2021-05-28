import React from "react";

import BodyText from "./BodyText";
import Header from "./Header";
import StaticIcon from "./StaticIcon";

function Skills() {
    return (
        <div id="skills">
            <div className="skillDisplay">
                <Header text="Skills" />
                <h2 className="skillHeader">Languages:</h2>
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
                <h2 className="skillHeader">Additional Technologies:</h2>
                <div className="tools">
                    <StaticIcon icon="./images/icons/git.png" alt="git" />
                    <StaticIcon icon="./images/icons/linux.png" alt="linux" />
                    <StaticIcon icon="./images/icons/flask.png" alt="flask" />
                </div>
                <div>
                    <StaticIcon icon="./images/icons/react.png" alt="react" />
                    <StaticIcon icon="./images/icons/bootstrap.png" alt="bootstrap" />
                    <StaticIcon icon="./images/icons/modo.png" alt="modo" />
                </div>
                <BodyText text="And more!" />
            </div>
        </div>
    );
}

export default Skills;