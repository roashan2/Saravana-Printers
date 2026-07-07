import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            {/* Hero */}
            <section className="services-hero">
                <div className="container">
                    <h1 className="page-title">Our Services</h1>
                    <p className="page-subtitle">Comprehensive Printing Solutions for Every Need</p>
                </div>
            </section>

            {/* Offset Printing */}
            <section id="offset" className="service-section section">
                <div className="container">
                    <div className="service-header">
                        <div className="service-icon-large">📰</div>
                        <div>
                            <h2 className="service-title">Offset Printing</h2>
                            <p className="service-tagline">Premium Quality for Large Volume Projects</p>
                        </div>
                    </div>
                    <div className="service-content">
                        <p>
                            Our offset printing services deliver exceptional quality and consistency for
                            high-volume projects. Perfect for brochures, catalogs, magazines, and marketing materials.
                        </p>
                        <div className="service-types">
                            <div className="type-card">
                                <h4>Brochures</h4>
                                <p>Professional brochures that showcase your business</p>
                            </div>
                            <div className="type-card">
                                <h4>Catalogs</h4>
                                <p>Detailed product and service catalogs</p>
                            </div>
                            <div className="type-card">
                                <h4>Diecut Designs</h4>
                                <p>Custom shapes and unique designs</p>
                            </div>
                            <div className="type-card">
                                <h4>Flyers</h4>
                                <p>Eye-catching promotional flyers</p>
                            </div>
                            <div className="type-card">
                                <h4>Invitations</h4>
                                <p>Elegant invitations for special events</p>
                            </div>
                            <div className="type-card">
                                <h4>Stationery</h4>
                                <p>Business cards, letterheads, and more</p>
                            </div>
                        </div>
                        <button className="btn btn-primary">Get Quote</button>
                    </div>
                </div>
            </section>

            {/* Screen Printing */}
            <section id="screen" className="service-section section section-alt">
                <div className="container">
                    <div className="service-header">
                        <div className="service-icon-large">🎨</div>
                        <div>
                            <h2 className="service-title">Screen Printing</h2>
                            <p className="service-tagline">Durable and Vibrant Specialty Printing</p>
                        </div>
                    </div>
                    <div className="service-content">
                        <p>
                            Screen printing offers exceptional durability and vibrant colors, perfect for
                            specialty applications on various materials.
                        </p>
                        <div className="service-types">
                            <div className="type-card">
                                <h4>Wedding Invitations</h4>
                                <p>Beautiful printed wedding invitations</p>
                            </div>
                            <div className="type-card">
                                <h4>Flags & Banners</h4>
                                <p>Custom flags for events and promotions</p>
                            </div>
                            <div className="type-card">
                                <h4>Thambula Bags</h4>
                                <p>Traditional printed bags</p>
                            </div>
                        </div>
                        <button className="btn btn-primary">Get Quote</button>
                    </div>
                </div>
            </section>

            {/* Graphic Design */}
            <section id="graphic" className="service-section section">
                <div className="container">
                    <div className="service-header">
                        <div className="service-icon-large">✨</div>
                        <div>
                            <h2 className="service-title">Graphic Design</h2>
                            <p className="service-tagline">Creative Designs That Captivate</p>
                        </div>
                    </div>
                    <div className="service-content">
                        <p>
                            Our talented design team brings your vision to life with stunning graphics that
                            capture attention and communicate your message effectively.
                        </p>
                        <ul className="service-features">
                            <li>Logo Design & Branding</li>
                            <li>Marketing Collateral Design</li>
                            <li>Packaging Design</li>
                            <li>Layout & Typography</li>
                            <li>Custom Illustrations</li>
                        </ul>
                        <button className="btn btn-primary">Get Quote</button>
                    </div>
                </div>
            </section>

            {/* Digital Printing */}
            <section id="digital" className="service-section section section-alt">
                <div className="container">
                    <div className="service-header">
                        <div className="service-icon-large">🖨️</div>
                        <div>
                            <h2 className="service-title">Digital Printing</h2>
                            <p className="service-tagline">Fast Turnaround for Urgent Projects</p>
                        </div>
                    </div>
                    <div className="service-content">
                        <p>
                            Digital printing technology allows us to deliver high-quality results quickly,
                            perfect for small batches and urgent projects with variable data.
                        </p>
                        <ul className="service-features">
                            <li>Quick turnaround times</li>
                            <li>Cost-effective for small quantities</li>
                            <li>Variable data printing</li>
                            <li>High-quality color reproduction</li>
                        </ul>
                        <button className="btn btn-primary">Get Quote</button>
                    </div>
                </div>
            </section>

            {/* Binding */}
            <section id="binding" className="service-section section">
                <div className="container">
                    <div className="service-header">
                        <div className="service-icon-large">📚</div>
                        <div>
                            <h2 className="service-title">Binding Services</h2>
                            <p className="service-tagline">Professional Finishing for Documents</p>
                        </div>
                    </div>
                    <div className="service-content">
                        <p>
                            Expert binding services for notebooks, registers, diaries, and professional
                            documents. Multiple binding options to suit your needs.
                        </p>
                        <div className="service-types">
                            <div className="type-card">
                                <h4>School Notebooks</h4>
                                <p>Durable binding for educational materials</p>
                            </div>
                            <div className="type-card">
                                <h4>Registers</h4>
                                <p>Professional registers and record books</p>
                            </div>
                            <div className="type-card">
                                <h4>Diaries</h4>
                                <p>Custom diaries and planners</p>
                            </div>
                        </div>
                        <button className="btn btn-primary">Get Quote</button>
                    </div>
                </div>
            </section>

            {/* Post Printing */}
            <section id="postprinting" className="service-section section section-alt">
                <div className="container">
                    <div className="service-header">
                        <div className="service-icon-large">✂️</div>
                        <div>
                            <h2 className="service-title">Post Printing Works</h2>
                            <p className="service-tagline">Complete Finishing Solutions</p>
                        </div>
                    </div>
                    <div className="service-content">
                        <p>
                            Comprehensive finishing services to give your printed materials a professional,
                            polished look that makes the right impression.
                        </p>
                        <ul className="service-features">
                            <li>Lamination (Glossy & Matte)</li>
                            <li>Die-Cutting & Embossing</li>
                            <li>Folding & Creasing</li>
                            <li>UV Coating</li>
                            <li>Packaging & Delivery</li>
                        </ul>
                        <button className="btn btn-primary">Get Quote</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
