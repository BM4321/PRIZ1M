import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail } from 'lucide-react';
import { loadContent } from '../utils/contentLoader';
import './TeamCarousel.css';

const TeamCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await loadContent('team');
                setTeamMembers(data);
            } catch (error) {
                console.error("Failed to load team members:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const nextSlide = () => {
        if (teamMembers.length === 0) return;
        setCurrent(current === teamMembers.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        if (teamMembers.length === 0) return;
        setCurrent(current === 0 ? teamMembers.length - 1 : current - 1);
    };

    // Auto-play
    useEffect(() => {
        if (teamMembers.length === 0) return;
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [current, teamMembers]);

    if (loading) return <div className="text-center">Loading team...</div>;
    if (teamMembers.length === 0) return null;

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
                                    {teamMembers[current].linkedin && (
                                        <a href={teamMembers[current].linkedin} target="_blank" rel="noopener noreferrer">
                                            <Linkedin size={20} className="social-icon" />
                                        </a>
                                    )}
                                    {teamMembers[current].twitter && (
                                        <a href={teamMembers[current].twitter} target="_blank" rel="noopener noreferrer">
                                            <Twitter size={20} className="social-icon" />
                                        </a>
                                    )}
                                    {teamMembers[current].email && (
                                        <a href={teamMembers[current].email}>
                                            <Mail size={20} className="social-icon" />
                                        </a>
                                    )}
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
