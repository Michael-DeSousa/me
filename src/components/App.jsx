import React from "react";

import Footer from "./Footer";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Projects from "./Projects";

function App() {
    return (
        <div>
            <Navbar />
            <Intro />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;