import React from "react";

import Card from "./Card";

function Gallery() {
    return (
        <div>
            <table className="galleryTable">
                <tbody>
                    <tr>
                        <td><Card img="./images/placeholder.png" alt="temp" title="Coming Soon" description="A new project is being worked on!" /></td>
                        <td><Card img="./images/portfolio.png" alt="Development Portfolio" title="Portfolio" description="The website you're on right now!" bullet1="React App" bullet2="HTML + CSS + ReactJS" bullet3="Deployed on Github Pages" source="https://github.com/Michael-Desousa/me" demo="https://michael-desousa.me" /></td>
                        <td><Card img="./images/rmailbox.png" alt="R'mailbox Project" title="R'Mailbox" description='"Smart" (IoT) Mailbox with package alerts and security features' bullet1="Python and C" bullet2="Raspberry Pi + Atmega1284" bullet3="Amazon Alexa Integration using Flask Server" source="https://github.com/Michael-DeSousa/R-Mailbox" demo="https://youtu.be/tdN0DXa4qWg" /></td>
                    </tr>
                    <tr>
                        <td><Card img="./images/kickstarter_analytics.png" alt="Kickstarter Analytics" title="Kickstarter Analytics" description="Data Analytics Website" bullet1="Front End: HTML + CSS + JS" bullet2="Back End: Python + Flask" bullet3="Analyzes data from nearly 400,000 Kickstarter projects!" source="https://github.com/Michael-Desousa/KSA" demo="https://www.youtube.com/watch?v=sDqwZvFt7VE" /></td>
                        <td><Card img="./images/smartscale_v2.jpg" alt="Smartscale" title="Smart Scale (2.0)" description='"Smart" Food Scale with scanner and wifi for food diary uploads'bullet1="Python and C" bullet2="Raspberry Pi Zero W" bullet3="Automates calorie counting using a food database" source="https://github.com/Michael-Desousa/smartscale" demo="https://www.youtube.com/watch?v=XH4YWV54YcU" /></td>
                        <td><Card img="./images/foodscale.png" alt="Scale Project" title="Scale (1.0)" description='Scale with a "max weight" warning buzzer and LED bar' bullet1="Programmed in C" bullet2="Atmega1284" bullet3="Supports SI and Imperial units + Tare Functionality" source="https://github.com/Michael-Desousa/foodscale" demo="https://www.youtube.com/watch?v=jWenBSRKTng" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Gallery;