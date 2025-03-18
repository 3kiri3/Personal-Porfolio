
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Proj from './Proj.js';
import About from './About.js';
import './Fo.css';
import Hobbies from './Hobbies.js';
import ex1 from './image/1.png';
import ex2 from './image/2.png';
import ex3 from './image/6.png';
import ex4 from './image/3.png';
import ex5 from './image/5.png';
import ex6 from './image/4.png';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Grille = ({ onImageClick }) => {
        const images = [
            { src: ex1, alt: "0" },
            { src: ex2, alt: "1" },
            { src: ex3, alt: "2" },
            { src: ex4, alt: "3" },
            { src: ex5, alt: "4" },
            { src: ex6, alt: "5" }
        ]
        return (
            <Carousel 
                responsive={responsive} 
                autoPlay={true} 
                autoPlaySpeed={3000}
                infinite={true}
                keyBoardControl={true}
                transitionDuration={500}
            >
                {images.map((image, index) => (
                    <div key={index} onClick={() => onImageClick(index)}>
                        <img src={image.src} alt={image.alt} className="carousel-image" />
                    </div>
                ))}
            </Carousel>
    );
};

const Fo = () => {
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);
    const handleScrollToProjet= () => {
        const element = document.getElementById("projet");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleImageClick = (alt) => {
        console.log("Image clicked with alt:", alt); // Pour vérifier que ça fonctionne
        setActiveProjectIndex(alt);
        handleScrollToProjet();
        
    };
    return(
        <>
        <div id="folio" className="folio-container">
            <div className="content">
                <h>Projects</h>
                <p className="slay">Here are some of my works.</p>
                <p className="slayy">I mostly did projects for school purposes. However, you'll also be able to find one project that I did for a client and 
                     an other that is 100% personal. Hope you enjoy my work and get inspired</p>
            </div>
            <Grille onImageClick={handleImageClick} />
        </div>
        <div className='pff'>
        <Proj activeProjectIndex={activeProjectIndex} />
        </div>
        <div className="aboutme">
        <About />
        </div>
        <div className="hobbiess">
        <Hobbies />
        </div>
        </>
);
};


export default Fo;