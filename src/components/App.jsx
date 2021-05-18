import React from "react";

import Footer from "./Footer";
import Greeting from "./Greeting";
import Navbar from "./Navbar";
import Projects from "./Projects";

function App() {
    return (
        <div>
            <Navbar />
            <Greeting />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;