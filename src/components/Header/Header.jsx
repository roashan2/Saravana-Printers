import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Becomes fixed/visible once the user scrolls down 60 pixels
            setHasScrolled(window.scrollY > 60);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${hasScrolled ? 'scrolled' : 'at-top'}`}>
            <div className="header-wrapper">
                
                {/* Clean Logo Block */}
                <div className="header-logo">
                    <Link to="/" className="logo-link">
                        <div className="brand-logo-small">
                            <span className="logo-aum-small">ॐ</span>
                        </div>
                    </Link>
                </div>

                {/* Central Desktop Links */}
                <nav className="scrolled-nav">
                    <ul className="nav-list-scrolled">
                        <li className="nav-item-scrolled active">
                            <Link to="/" className="nav-link-scrolled">
                                <span className="nav-dot">●</span> Home
                            </Link>
                        </li>
                        <li className="nav-item-scrolled">
                            <Link to="/profile" className="nav-link-scrolled">About</Link>
                        </li>
                        <li className="nav-item-scrolled">
                            <Link to="/products" className="nav-link-scrolled">Projects</Link>
                        </li>
                        <li className="nav-item-scrolled">
                            <Link to="/contact" className="nav-link-scrolled">Contact</Link>
                        </li>
                    </ul>
                </nav>

                {/* Right Utilities */}
                <div className="scrolled-theme">
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Action Toggle */}
                <button
                    className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </div>

            {/* Bottom Tray: Desktop Social Links */}
            <div className="header-social">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    LINKEDIN ↗
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    GITHUB ↗
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    INSTAGRAM ↗
                </a>
                <a href="mailto:contact@example.com" className="social-link">
                    GMAIL ↗
                </a>
            </div>

            {/* Mobile Adaptive Dropdown Tray */}
            {mobileMenuOpen && (
                <nav className="nav-mobile">
                    <ul className="mobile-menu">
                        <li><Link to="/" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/profile" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
                        <li><Link to="/services" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
                        <li><Link to="/products" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Products</Link></li>
                        <li><Link to="/contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;