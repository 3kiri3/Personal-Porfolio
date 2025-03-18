
import React, { useEffect, useState } from 'react';
import './Home.css';
import photo from './image/draw.png';
import photo1 from './image/masque.png';




const Home = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY; // Position de défilement
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div section id="home" className="home-container">
            <div className="home-background"></div>
            <div className="content">
                <h2>Hi, I am Yousra</h2>
                <p className="ppp" style={{ transform: `translateX(-${scrollPosition * 0.9}px)` }}>
                    Your Ui/Ux designer, 3D artist, perfectionnist and maximalist creative.
                </p>
            </div>
            <div className="pellicule-container">
                <img src={photo1} alt="" className="pellicule-image" />
            </div>
            <div className="pellicule-container2">
                <img src={photo} alt="" className="pellicule-image1"/>
            </div>
            <div class="decorative-line" style={{ transform: `translateX(-${scrollPosition * 0.7}px)` }}></div>
            <div className="decorative-line2" style={{ transform: `translateY(-${scrollPosition * 0.9}px)` }}></div>
        </div>
    );
}


export default Home;