import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectDetails: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your inquiry, ${formData.name}! We'll get back to you soon.`);
        setFormData({ name: '', email: '', phone: '', projectDetails: '' });
    };

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="contact-hero">
                <div className="container">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-subtitle">Let's Bring Your Printing Project to Life</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2>Send Us a Message</h2>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+91 98765 43210"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="projectDetails">Project Details *</label>
                                    <textarea
                                        id="projectDetails"
                                        name="projectDetails"
                                        value={formData.projectDetails}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="Tell us about your printing project..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info-wrapper">
                            <h2>Get In Touch</h2>

                            <div className="contact-info-card">
                                <div className="info-icon">📍</div>
                                <div>
                                    <h3>Our Location</h3>
                                    <p>123 Main Road<br />Salem - 636001<br />Tamil Nadu, India</p>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <div className="info-icon">📞</div>
                                <div>
                                    <h3>Phone</h3>
                                    <a href="tel:+919876543210">+91 98765 43210</a>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <div className="info-icon">✉️</div>
                                <div>
                                    <h3>Email</h3>
                                    <a href="mailto:info@saravanaprinters.com">info@saravanaprinters.com</a>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <div className="info-icon">💬</div>
                                <div>
                                    <h3>WhatsApp</h3>
                                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                                        Chat with us on WhatsApp
                                    </a>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="business-hours">
                                <h3>Business Hours</h3>
                                <div className="hours-list">
                                    <div className="hours-item">
                                        <span>Monday - Saturday</span>
                                        <span>9:00 AM - 8:00 PM</span>
                                    </div>
                                    <div className="hours-item">
                                        <span>Sunday</span>
                                        <span>10:00 AM - 2:00 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="map-section">
                        <h2>Find Us on the Map</h2>
                        <div className="map-container">
                            <div className="map-placeholder">
                                <div className="map-icon">🗺️</div>
                                <p>Map Integration</p>
                                <small>Replace with Google Maps iframe or component</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
