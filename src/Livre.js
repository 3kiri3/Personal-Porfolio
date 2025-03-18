import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Livre.css';
import booksData from './livre.json'; 

const Livre = () => {
    const [activeBookIndex, setActiveBookIndex] = useState(0);
    const currentBook = booksData[activeBookIndex];


    return (
        <section id="livre" className="livre">
            <h1 className="livre-title">but I mostly spend my time reading and playing video games</h1>
            <p className="txt">So here's some of my current or favorite books:</p>
            <div className="container-livre">
                <div className="sliderr">
                    <div className="itemm">
                        <img src={require(`./${currentBook.slides[0]}`)} alt={`Slide 1`} className="slide-image" />
                    </div>
                    <div className='description'>
                        <h1>{currentBook.title}</h1>
                        <h2>{currentBook.description}</h2>
                        <p>{currentBook.appreciation}</p>
                    </div>
                    <div id="prevv" onClick={() => setActiveBookIndex((activeBookIndex - 1 + booksData.length) % booksData.length)}>
                        <FaChevronLeft size={30} />
                    </div>
                    <div id="nextt" onClick={() => setActiveBookIndex((activeBookIndex + 1) % booksData.length)}>
                        <FaChevronRight size={30} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Livre;