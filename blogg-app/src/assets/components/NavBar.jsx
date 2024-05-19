import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import '../styling/home.css';
import { useUser } from "../../blogg/UserContext";

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isBlogMenuOpen, setIsBlogMenuOpen] = useState(false);
    const { user } = useUser();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleBlogMenu = () => {
        setIsBlogMenuOpen(!isBlogMenuOpen);
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <nav className={`navbar ${isScrolled ? 'navbar_bg' : ''}`}>
                <div className="logo">
                    <Link to="/" className="text-yellow-400 font-bold text-lg font-titan-one">
                        NurG
                    </Link>
                </div>
                <input
                    type="checkbox"
                    id="toggle"
                    className="toggle-menu hidden"
                    checked={isMenuOpen}
                    onChange={toggleMenu}
                />
                <label htmlFor="toggle" className="hamburger cursor-pointer">
                    <span className="block w-5 h-0.5 bg-white mb-1"></span>
                    <span className="block w-5 h-0.5 bg-white mb-1"></span>
                    <span className="block w-5 h-0.5 bg-white"></span>
                </label>
                <div className="nav-links">
                    <div className="menu">
                        <Link to="/AboutPage" className="text-white">About</Link>
                        <div className="relative">
                            <button onClick={toggleBlogMenu} className="text-white">
                                Blogg
                            </button>
                            {isBlogMenuOpen && (
                                <div className="absolute bg-white text-black mt-2 rounded shadow-lg">
                                    <Link to="/add" className="block px-4 py-2">Add Blog Post</Link>
                                    <Link to="/" className="block px-4 py-2">View Blog Posts</Link>
                                </div>
                            )}
                        </div>
                    </div>
                    {user ? (
                        <span className="text-white ml-4">{user.email}</span>
                    ) : (
                        <Link to="/signin" className="cta-button ml-4">Sign In</Link>
                    )}
                    <button className="cta-button ml-4" onClick={scrollToContact}>Say Hi!</button>
                </div>
            </nav>
        </header>
    );
};

export default NavigationBar;
