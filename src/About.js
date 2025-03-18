import React from "react";
import "./About.css";
import { ReactComponent as SkillIcon1 } from './image/svg/java.svg'; 
import { ReactComponent as SkillIcon2 } from './image/svg/python.svg';
import { ReactComponent as SkillIcon3 } from './image/svg/react.svg';
import { ReactComponent as SkillIcon4 } from './image/svg/html.svg';
import { ReactComponent as SkillIcon5 } from './image/svg/css.svg';
import { ReactComponent as SkillIcon6 } from './image/svg/js.svg';
import { ReactComponent as SkillIcon7 } from './image/svg/figma.svg';
import { ReactComponent as SkillIcon8 } from './image/svg/c.svg';


const About = () => {
    const handleScrollToHobbies = () => {
        const element = document.getElementById("hobbies");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div section id="about" className="about">
            <div className="about-title">About me</div>
            <div className="trait1"></div>
            <div className="trait2"></div>
            <div className="trait3"></div>
            <div className="about-content">
                <p>I’ve always been drawn to both logic and creativity, constantly looking for ways to merge the two. I started with a Science Baccalaureate with honors at a private high school , then pursued a Bachelor’s degree in Computer Science at Paris-Saclay, where I discovered UI/UX design. That moment changed everything—it became more than just an interest, it became a passion.
                    For a while, I considered architecture, thinking it might be the perfect balance between structure and creativity. But stepping away from computer science for a year made me realize that this field is where I truly belong.
                    Now, as a UI/UX designer and web developer, I’m passionate about creating seamless, user-centered experiences—where design meets function in the most intuitive way possible. And with my artistic side (see my hobbies!), I bring a unique perspective to every project.</p>
            </div>
            <div className="skills">
                <div className="skill-box"><SkillIcon1 /></div>
                <div className="skill-box"><SkillIcon2 /></div>
                <div className="skill-box"><SkillIcon3 /></div>
                <div className="skill-box"><SkillIcon4 /></div>
                <div className="skill-box"><SkillIcon5 /></div>
                <div className="skill-box"><SkillIcon6 /></div>
                <div className="skill-box"><SkillIcon7 /></div>
                <div className="skill-box"><SkillIcon8 /></div>
        
            </div>
            <button onClick={handleScrollToHobbies} className="about-button">Discover My hobbies</button>
        </div>
    );
}

export default About;