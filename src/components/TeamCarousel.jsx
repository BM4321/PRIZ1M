import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail } from 'lucide-react';
import './TeamCarousel.css';

const TeamCarousel = () => {
    const [current, setCurrent] = useState(0);

    const teamMembers = [
        {
            id: 1,
            name: "Godson Gideon",
            role: "CEO & Co-Founder",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            bio: "Visionary leader with 10+ years in digital transformation.",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            email: "mailto:godson@priz1m.com"
        },
        {
            id: 2,
            name: "Ismart",
            role: "CFO & Co-Founder",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            bio: "Award-winning designer passionate about user-centric experiences.",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            email: "mailto:ismart@priz1m.com"
        },
        {
            id: 3,
            name: "Shedrack Maeda",
            role: "CTO & Co-Founder",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            bio: "Full-stack expert specializing in scalable web architectures.",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            email: "mailto:shedrack@priz1m.com"
        }
    ];

    const nextSlide = () => {
        setCurrent(current === teamMembers.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? teamMembers.length - 1 : current - 1);
    };

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <div className="team-carousel-container">
            <div className="carousel-wrapper">
                <button className="carousel-btn prev" onClick={prevSlide}>
                    <ChevronLeft size={24} />
                </button>

                <div className="carousel-content">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="team-card glass-panel"
                        >
                            <div className="team-image-container">
                                <img src={teamMembers[current].image} alt={teamMembers[current].name} className="team-image" />
                            </div>
                            <div className="team-info">
                                <h3>{teamMembers[current].name}</h3>
                                <h4 className="text-secondary">{teamMembers[current].role}</h4>
                                <p>{teamMembers[current].bio}</p>
                                <div className="team-socials">
                                    <a href={teamMembers[current].linkedin} target="_blank" rel="noopener noreferrer">
                                        <Linkedin size={20} className="social-icon" />
                                    </a>
                                    <a href={teamMembers[current].twitter} target="_blank" rel="noopener noreferrer">
                                        <Twitter size={20} className="social-icon" />
                                    </a>
                                    <a href={teamMembers[current].email}>
                                        <Mail size={20} className="social-icon" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button className="carousel-btn next" onClick={nextSlide}>
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="carousel-dots">
                {teamMembers.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default TeamCarousel;
