import React from 'react';

const About = () => {
    return (
        <div className="page-container container" style={{ padding: '4rem 1rem' }}>
            <div className="text-center mb-lg">
                <h1>About Us</h1>
                <p className="lead">We are a team of digital craftsmen.</p>
            </div>

            <div className="row">
                <div className="content">
                    <h3>Our Mission</h3>
                    <p>
                        At PRIZ1M, our mission is to empower businesses with digital solutions that are not just functional, but transformative.
                        We believe in the power of design and technology to elevate brands and connect them with their audience in meaningful ways.
                    </p>
                    <br />
                    <h3>Our Story</h3>
                    <p>
                        Founded with a vision to bridge the gap between creative design and technical excellence, PRIZ1M has grown into a full-service digital agency.
                        We specialize in web development, social media management, and graphic design, serving clients across various industries.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
