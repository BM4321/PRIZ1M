import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <Link to="/" className="footer-logo">
                        <img src="/assets/LIGHT LOGO.svg" alt="PRIZ1M" />
                    </Link>
                    <p className="footer-desc">
                        Your partner in digital excellence. We build websites, manage brands, and drive growth.
                    </p>
                </div>

                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Services</h3>
                    <ul className="footer-links">
                        <li><Link to="/services">Web Development</Link></li>
                        <li><Link to="/services">Social Media Management</Link></li>
                        <li><Link to="/services">Graphic Design</Link></li>
                        <li><Link to="/services">SEO Optimization</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Contact Info</h3>
                    <ul className="footer-links">
                        <li>hello@priz1m.com</li>
                        <li>+255 123 456 789</li>
                        <li>Arusha, Tanzania</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom container">
                <p>&copy; {currentYear} PRIZ1M. All Rights Reserved.</p>
                <div className="footer-socials">
                    {/* Add social icons here if needed */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
