import React from "react";
import Header from "./Header";

function ContactForm() {
    return (
        <div id="Contact">
            <Header text="Let's Get In Touch!"/>

            {/* Using formsubmit.co to forward emails to me*/}
            <form action="https://formsubmit.co/314a61eeff6024c8bb9703483cb0923e" method="POST">
                <input className="formTextInput" type="text" name="senderName" placeholder="Your Name" minLength="2" required/>
                <input className="formTextInput" type="email" name="senderEmail" placeholder="Your Email" minLength="3" required />
                <input className="formTextInput" type="text" name="senderSubject" placeholder="Subject" />
                <textarea className="formTextInput"name="senderMessage" rows="7" placeholder="Your Message" minLength="2" required/>
                <input className="formSubmit" type="submit" value="Send" />
            </form>
        </div>
    );
}

export default ContactForm;