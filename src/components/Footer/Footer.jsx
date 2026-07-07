import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for subscribing! We'll send updates to ${email}`);
        setEmail('');
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Company Info */}
                    <div className="footer-section">
                        <h3 className="footer-heading">Aum Sree Saravana Printers</h3>
                        <p className="footer-text">
                            Your trusted printing partner in Salem, delivering premium quality
                            printing solutions with cutting-edge technology and exceptional service.
                        </p>
                        <div className="footer-address">
                            <p><strong>Address:</strong></p>
                            <p>123 Main Road, Salem - 636001</p>
                            <p>Tamil Nadu, India</p>
                            <p><strong>Phone:</strong> +91 98765 43210</p>
                            <p><strong>Email:</strong> info@saravanaprinters.com</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/profile">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="footer-section">
                        <h3 className="footer-heading">Our Services</h3>
                        <ul className="footer-links">
                            <li><Link to="/services#offset">Offset Printing</Link></li>
                            <li><Link to="/services#screen">Screen Printing</Link></li>
                            <li><Link to="/services#graphic">Graphic Design</Link></li>
                            <li><Link to="/services#digital">Digital Printing</Link></li>
                            <li><Link to="/services#binding">Binding Services</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-section">
                        <h3 className="footer-heading">Get Quote Updates</h3>
                        <p className="footer-text">
                            Subscribe to receive special offers and printing tips.
                        </p>
                        <form className="newsletter-form" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="newsletter-input"
                                required
                            />
                            <button type="submit" className="newsletter-btn">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="copyright">
                        © {new Date().getFullYear()} Aum Sree Saravana Printers. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <a href="#privacy">Privacy Policy</a>
                        <span className="separator">|</span>
                        <a href="#terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
