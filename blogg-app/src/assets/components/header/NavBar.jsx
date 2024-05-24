import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/index.jsx";
import BlogWrapper from "../blogg/BloggWrapper";
import { doSignOut } from '../../firebase/auth'


const NavigationBar = () => {
    const { userLoggedIn, signOut, signOutError } = useAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isBlogMenuOpen, setIsBlogMenuOpen] = useState(false);

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

                <div className="nav-links">
                    <div className="menu">
                        <Link to="/AboutPage" className="text-white">About</Link>
                        {user && (
                            <div className="absolute">
                                <button onClick={toggleBlogMenu} className="text-white">
                                    Blog
                                </button>
                                {isBlogMenuOpen && (
                                    <div className="absolute bg-white text-black mt-2 rounded shadow-lg">
                                        <Link to="/add" className="block px-4 py-2">Add Blog Post</Link>
                                        <Link to="/" className="block px-4 py-2">View Blog Posts</Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    {user ? (
                        <>
                            <span className="text-white ml-4">{user.email}</span>
                            <button onClick={() => { signOut().then(() => { navigate('/signin') }) }} className="cta-button ml-4">Sign Out</button>
                            {signOutError && <p className="text-red-500 ml-4">{signOutError}</p>}
                        </>
                    ) : (
                        <>
                            <Link to="/signin" className="cta-button ml-4">Sign In</Link>
                            <Link to="/register" className="cta-button ml-4">Register New Account</Link>
                        </>
                    )}
                    <button className="cta-button ml-4" onClick={scrollToContact}>Say Hi!</button>
                </div>
            </nav>
            {userLoggedIn ? (
                <div className="BlogWrapper">
                    <BlogWrapper isLoggedIn={!!user} />
                </div>
            ) : null}
        </header>
    );
};

export default NavigationBar;