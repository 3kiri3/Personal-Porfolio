
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Proj.css'; 
import projectsData from './projet.json';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';


const Proj = ({activeProjectIndex}) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };



    const currentProject = projectsData[activeProjectIndex];
    useEffect(() => {
        if (currentProject) {
            loadShow();
        }
    }, [activeSlideIndex, currentProject]);

    const loadShow = () => {
        const itemsElements = document.querySelectorAll('.slider .item');
        let stt = 0;

        itemsElements[activeSlideIndex].style.transform = `none`;
        itemsElements[activeSlideIndex].style.zIndex = 1;
        itemsElements[activeSlideIndex].style.filter = 'none';
        itemsElements[activeSlideIndex].style.opacity = 1;

        for (let i = activeSlideIndex + 1; i < itemsElements.length; i++) {
            stt++;
            itemsElements[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
            itemsElements[i].style.zIndex = -stt;
            itemsElements[i].style.filter = 'blur(5px)';
            itemsElements[i].style.opacity = stt > 2 ? 0 : 0.6;
        }

        stt = 0;
        for (let i = activeSlideIndex - 1; i >= 0; i--) {
            stt++;
            itemsElements[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
            itemsElements[i].style.zIndex = -stt;
            itemsElements[i].style.filter = 'blur(5px)';
            itemsElements[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    };


    const nextSlide = () => {
        setActiveSlideIndex((prevActive) => {
            const totalSlides = projectsData[activeProjectIndex].slides.length;
            return (prevActive + 1 < totalSlides) ? prevActive + 1 : prevActive;
        });
    };

    const prevSlide = () => {
        setActiveSlideIndex((prevActive) => (prevActive - 1 >= 0 ? prevActive - 1 : prevActive));
    };
  

    return (
        <div id="projet" className="container-proj">
        <div className="slider">
            <div className="title">{projectsData[activeProjectIndex].title}</div>
                {projectsData[activeProjectIndex].slides.map((slide, index) => (
                    <div className={`item ${index === activeSlideIndex ? 'active' : ''}`} key={index}>
                        <img src={require('./' + slide)} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            <div id="prev" onClick={prevSlide} style={{ cursor: 'pointer', position: 'absolute', transform: 'translateY(-50%)' }}>
                <FaChevronLeft size={30} />
            </div>
            <div id="next" onClick={nextSlide} style={{ cursor: 'pointer', position: 'absolute', transform: 'translateY(-50%)' }}>
                <FaChevronRight size={30} />
            </div>
            <Button 
            onClick={toggleDrawer(true)} 
            sx={{
                margin: '10px',
                backgroundColor: '#3B507D',
                color: 'white',
                borderRadius: '0px',
                '&:hover': {
                    backgroundColor: '#115293',
                },
            }}
            > More Details</Button>
            <Drawer 
                open={open} 
                onClose={toggleDrawer(false)} 
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: '#11089877', // Couleur de fond personnalisée
                        padding: '20px', // Espacement intérieur
                        fontSize: '18px', // Taille de la police
                        color: 'white', // Couleur du texte
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', // Ombre personnalisée
                    },
                }}
            >
                {projectsData[activeProjectIndex].description}
            </Drawer>
        </div>
        </div>
    );
};


export default Proj;