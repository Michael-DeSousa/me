import React from "react";

import Card from "./Card";

function Gallery() {
    return (
        <div>
            <table className="galleryTable">
                <tbody>
                    <tr>
                        <td><Card img="./images/placeholder.png" alt="temp" title="R'Mailbox" description="New project being worked on!" /></td>
                        <td><Card img="./images/rmailbox.png" alt="R'mailbox Project" title="R'Mailbox" description='"Smart" (IoT) Mailbox' bullet1="Python and C" bullet2="Raspberry Pi + Atmega1284" bullet3="Amazon Alexa Integration using Flask Server" source="https://github.com/Michael-Desousa" demo="https://youtube.com" /></td>
                        <td><Card img="./images/rmailbox.png" alt="R'mailbox Project" title="R'Mailbox" description='"Smart" (IoT) Mailbox' bullet1="Python and C" bullet2="Raspberry Pi + Atmega1284" bullet3="Amazon Alexa Integration using Flask Server" source="https://github.com/Michael-Desousa" demo="https://youtube.com" /></td>
                    </tr>
                    <tr>
                        <td><Card img="./images/rmailbox.png" alt="R'mailbox Project" title="R'Mailbox" description='"Smart" (IoT) Mailbox' bullet1="Python and C" bullet2="Raspberry Pi + Atmega1284" bullet3="Amazon Alexa Integration using Flask Server" source="https://github.com/Michael-Desousa" demo="https://youtube.com" /></td>
                        <td><Card img="./images/rmailbox.png" alt="R'mailbox Project" title="R'Mailbox" description='"Smart" (IoT) Mailbox' bullet1="Python and C" bullet2="Raspberry Pi + Atmega1284" bullet3="Amazon Alexa Integration using Flask Server" source="https://github.com/Michael-Desousa" demo="https://youtube.com" /></td>
                        <td><Card img="./images/rmailbox.png" alt="R'mailbox Project" title="R'Mailbox" description='"Smart" (IoT) Mailbox' bullet1="Python and C" bullet2="Raspberry Pi + Atmega1284" bullet3="Amazon Alexa Integration using Flask Server" source="https://github.com/Michael-Desousa" demo="https://youtube.com" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Gallery;