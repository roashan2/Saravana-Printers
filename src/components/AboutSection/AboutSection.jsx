import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section className="about-section section">
            <div className="container">
                <div className="about-grid">
                    {/* Left: Company Image */}
                    <div className="about-image-wrapper">
                        <div className="about-image">
                            <div className="image-placeholder">
                                <div className="placeholder-icon">🏢</div>
                                <p>Saravana Printers Building</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: About Content */}
                    <div className="about-content">
                        <span className="about-label">About Us</span>
                        <h2 className="about-heading">Precision Printing. Powerful Impressions.</h2>
                        <p className="about-text">
                            Located in the heart of Salem, <strong>Aum Sree Saravana Printers</strong> has been
                            the trusted printing partner for businesses and individuals for years. We combine
                            traditional craftsmanship with cutting-edge technology to deliver exceptional
                            printing solutions.
                        </p>
                        <p className="about-text">
                            Our commitment to quality, precision, and customer satisfaction has made us a
                            leader in the printing industry. From offset printing to digital solutions,
                            we have the expertise and equipment to handle projects of any size and complexity.
                        </p>
                        <div className="about-highlights">
                            <div className="highlight-item">
                                <div className="highlight-number">15+</div>
                                <div className="highlight-label">Years Experience</div>
                            </div>
                            <div className="highlight-item">
                                <div className="highlight-number">5000+</div>
                                <div className="highlight-label">Happy Clients</div>
                            </div>
                            <div className="highlight-item">
                                <div className="highlight-number">100%</div>
                                <div className="highlight-label">Quality Guaranteed</div>
                            </div>
                        </div>
                        <button className="btn btn-primary">Learn More About Us</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
