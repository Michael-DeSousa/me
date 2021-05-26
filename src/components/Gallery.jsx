import React from "react";

import Card from "./Card";

function Gallery() {
    return (
        <div>
            <table className="galleryTable">
                <tbody>
                    <tr>
                        <td><Card link="https://github.com/" img="./images/placeholder.png" alt="temp" title="R'Mailbox" description="New project being worked on!" /></td>
                        <td><Card link="https://github.com/Michael-DeSousa/R-Mailbox" img="./images/rmailbox.png" alt="R'mailbox Project" title="R'Mailbox" description='"Smart" (IoT) Mailbox' bullet1="Python and C" bullet2="Raspberry Pi + Atmega1284" bullet3="Amazon Alexa Integration using Flask Server" /></td>
                        <td><Card link="https://github.com/Michael-DeSousa/R-Mailbox" img="./images/rmailbox.png" alt="R'mailbox Project" title="R'Mailbox" description="Senior Design Spring 2020" /></td>
                    </tr>
                    <tr>
                        <td><Card link="https://github.com/Michael-DeSousa/R-Mailbox" img="./images/rmailbox.png" alt="R'mailbox Project" title="R'Mailbox" description="Senior Design Spring 2020" /></td>
                        <td><Card link="https://github.com/Michael-DeSousa/R-Mailbox" img="./images/rmailbox.png" alt="R'mailbox Project" title="R'Mailbox" description="Senior Design Spring 2020" /></td>
                        <td><Card link="https://github.com/Michael-DeSousa/R-Mailbox" img="./images/rmailbox.png" alt="R'mailbox Project" title="R'Mailbox" description="Senior Design Spring 2020" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Gallery;