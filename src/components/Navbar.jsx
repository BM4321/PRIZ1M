import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    {/* Using the logo from public/assets */}
                    <img src="/assets/LIGHT LOGO.svg" alt="PRIZ1M Logo" />
                </Link>

                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={isOpen ? 'hamburger open' : 'hamburger'}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={closeMenu}>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className={`nav-link ${isActive('/portfolio')}`} onClick={closeMenu}>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/packages" className={`nav-link ${isActive('/packages')}`} onClick={closeMenu}>Packages</Link>
                    </li>
                    <li className="nav-item btn-item">
                        <Link to="/contact" className="primary-btn nav-btn" onClick={closeMenu}>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
