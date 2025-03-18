import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import "./Hobbies.css";
import Livre from "./Livre.js";

// Importer les images
import hobby1 from './image/plateau.jpg';
import hobby2 from './image/fruit2.jpg';
import hobby3 from './image/poisson.JPG';
import hobby4 from './image/trois.JPG';


const Hobbies = () => {
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

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
        <div section id="hobbies" className="hobbies">
            <div className="hobbies-title" style={{ transform: `translateX(${scrollPosition * 0.001}px)` }}>My hobBbies</div>
            <div className="lune"></div>
            <div className="craft">
                <div className="title-craft">My Craft</div>
                <div className="explanation"> Polymer clay is where my creativity comes to life. I love sculpting intricate designs, crafting unique jewelry, and experimenting with colors and textures. It's a hands-on escape that blends artistry with precision, allowing me to transform simple materials into something meaningful. Whether it’s tiny charms or statement pieces, every creation is a reflection of my passion for detail and design.





</div>
                <div ref={ref1} className={`image-container image1 ${inView1 ? 'visible' : ''}`}>
                    <img src={hobby1} alt="Hobby 1" />
                </div>
                <div ref={ref2} className={`image-container image2 ${inView2 ? 'visible' : ''}`}>
                    <img src={hobby2} alt="Hobby 2" />
                </div>
                <div ref={ref3} className={`image-container image3 ${inView3 ? 'visible' : ''}`}>
                    <img src={hobby3} alt="Hobby 3" />
                </div>
                <div ref={ref3} className={`image-container image4 ${inView3 ? 'visible' : ''}`}>
                    <img src={hobby4} alt="Hobby 3" />
                </div>
            </div>
            <Livre/>
        </div>
    );
}

export default Hobbies;