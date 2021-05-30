import React from "react";

import ContactForm from "./ContactForm"
import Footer from "./Footer";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
    return (
        <div>
            <Navbar />
            <Intro />
            <Projects />
            <Skills />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default App;