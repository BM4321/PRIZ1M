import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Monitor, Rocket, TrendingUp } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Elevate Your Digital Presence with PRIZ1M</h1>
                        <p className="hero-subtitle">
                            We build premium websites, manage your brand, and drive real growth.
                            Your partner in digital excellence.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/contact">
                                <Button variant="primary">Get Started <ArrowRight size={18} /></Button>
                            </Link>
                            <Link to="/portfolio">
                                <Button variant="secondary">View Our Work</Button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Animated Hero Graphic using the Icon */}
                        <div className="hero-placeholder animate-float">
                            <img src="/assets/DARK ICON.svg" alt="PRIZ1M Icon" style={{ opacity: 0.8, width: '350px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }} />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section bg-surface">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Services</h2>
                        <p>Comprehensive digital solutions for your business</p>
                    </div>
                    <div className="grid-3">
                        <Card
                            title="Web Development"
                            description="Custom websites built with modern technologies like React, Next.js, and more."
                            icon={<Monitor />}
                        />
                        <Card
                            title="Brand Management"
                            description="Strategic branding to position your business as a leader in your industry."
                            icon={<Rocket />}
                        />
                        <Card
                            title="Digital Marketing"
                            description="SEO, Social Media, and campaigns that convert visitors into customers."
                            icon={<TrendingUp />}
                        />
                    </div>
                    <div className="text-center mt-lg">
                        <Link to="/services"><Button variant="secondary">View All Services</Button></Link>
                    </div>
                </div>
            </section>

            {/* Intro/About Preview */}
            <section className="section">
                <div className="container display-flex align-center gap-xl responsive-col">
                    <div className="flex-1">
                        <motion.img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Team"
                            style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)' }}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        />
                    </div>
                    <div className="flex-1">
                        <h2>Why Choose PRIZ1M?</h2>
                        <p className="mb-md">
                            We are not just a digital agency; we are your partners in success.
                            At PRIZ1M, we combine creativity with technical expertise to deliver results that matter.
                        </p>
                        <ul className="feature-list mb-md">
                            <li className="display-flex align-center gap-md">
                                <CheckCircle className="text-primary" size={20} color="var(--color-primary)" /> Expert Team of Developers & Designers
                            </li>
                            <li className="display-flex align-center gap-md">
                                <CheckCircle className="text-primary" size={20} color="var(--color-primary)" /> Tailored Strategies for Your Business
                            </li>
                            <li className="display-flex align-center gap-md">
                                <CheckCircle className="text-primary" size={20} color="var(--color-primary)" /> Data-Driven Results
                            </li>
                        </ul>
                        <Link to="/about"><Button>Learn More About Us</Button></Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section text-center" style={{ background: 'var(--gradient-primary)', color: 'white' }}>
                <div className="container">
                    <h2 style={{ color: 'white' }}>Ready to Transform Your Business?</h2>
                    <p className="mb-lg" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        Let's discuss how we can help you achieve your goals.
                    </p>
                    <Link to="/contact">
                        <Button className="btn-white" style={{ background: 'white', color: 'var(--color-primary)' }}>
                            Contact Us Today
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
