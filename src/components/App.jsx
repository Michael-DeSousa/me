import React from "react";

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
            <Footer />
        </div>
    );
}

export default App;