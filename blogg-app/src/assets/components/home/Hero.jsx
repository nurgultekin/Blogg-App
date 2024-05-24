import React, { useEffect } from "react";
import '../../styling/home.css';
import 'tailwindcss/tailwind.css';
const HeroSection = () => {
    
    return (
        <div className="hero-container">
            <div>
                <h1 className="hero-title">
                    Hello, <br />
                    <span className="text-9xl">World!</span></h1>
            </div>

            <div>
                <p className="hero-text text-white text-shadow font-semibold text-lg md:text-xl font-sans text-center max-w-3/4">
                    Welcome to <span className="name">Nur's Blogg App</span>, which is designed and developed to make her recruitment process smooth, and enable her references to write on her blogg for recruiters to see.</p>
            </div>

            

            <div className="selected-cases" id="selected-cases">
                Read more
                <span className="arrow-down"></span>
            </div>

        </div>
    );
};

export default HeroSection;
