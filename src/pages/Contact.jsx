import React, { useState } from 'react';
import Button from '../components/Button';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact-page container section">
            <div className="contact-header text-center mb-lg" style={{ marginBottom: '3rem' }}>
                <h1>Get In Touch</h1>
                <p>We'd love to hear from you. Fill out the form below.</p>
            </div>

            <div className="contact-container">
                <form className="contact-form glass-panel" onSubmit={handleSubmit} style={{ padding: '3rem' }}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="Project Inquiry"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            placeholder="Tell us about your project..."
                        ></textarea>
                    </div>

                    <Button type="submit" variant="primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                        Send Message <Send size={18} />
                    </Button>
                </form>

                <div className="contact-info">
                    <div className="info-item">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <MapPin className="text-primary" /> Visit Us
                        </h3>
                        <p style={{ marginLeft: '34px' }}>123 Innovation Drive<br />Arusha, Tanzania</p>
                    </div>
                    <div className="info-item">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Mail className="text-primary" /> Email Us
                        </h3>
                        <p style={{ marginLeft: '34px' }}>hello@priz1m.com</p>
                    </div>
                    <div className="info-item">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Phone className="text-primary" /> Call Us
                        </h3>
                        <p style={{ marginLeft: '34px' }}>+255 123 456 789</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
