
import React from 'react';
import './App.css';
import Home from './Home.js';
import Fo from './Fo.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const Navbar = () => {
    const handleScrollToHome = () => {
        const element = document.getElementById("home");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleScrollToHobbies = () => {
        const element = document.getElementById("hobbies");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleScrollToAbout = () => {
        const element = document.getElementById("about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleScrollToPortfolio= () => {
        const element = document.getElementById("folio");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    return (
        <nav className="navbar">
            <ul>
                <li><a onClick={handleScrollToHome}>Accueil</a></li>
                <li><a onClick={handleScrollToAbout}>About me</a></li>
                <li><a onClick={handleScrollToPortfolio}>Portfolio</a></li>
                <li><a onClick={handleScrollToHobbies}>Hobbies</a></li>
            </ul>
        </nav>
    );
};


const App = () => {
    return (
        <>
        <Navbar />
        <Home />
        <Fo />
        </>
    );
};

export default App;