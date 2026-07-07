import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-page">
            {/* Hero Section */}
            <section className="profile-hero">
                <div className="container">
                    <h1 className="page-title">About Aum Sree Saravana Printers</h1>
                    <p className="page-subtitle">Excellence in Printing Since 2008</p>
                </div>
            </section>

            {/* Company History */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Our Story</h2>
                    <div className="content-grid">
                        <div className="content-text">
                            <p>
                                Founded in 2008, <strong>Aum Sree Saravana Printers</strong> has grown to become
                                one of Salem's most trusted printing service providers. What started as a small
                                offset printing shop has evolved into a comprehensive printing solutions center,
                                equipped with state-of-the-art technology and staffed by experienced professionals.
                            </p>
                            <p>
                                Our journey has been driven by a simple philosophy: deliver exceptional quality
                                and service that exceeds expectations. Over the years, we've invested in cutting-edge
                                machinery and continuous training for our team to ensure we stay at the forefront
                                of the printing industry.
                            </p>
                            <p>
                                Today, we serve hundreds of satisfied customers ranging from small businesses to
                                large corporations, educational institutions, and individuals with diverse printing needs.
                            </p>
                        </div>
                        <div className="content-image">
                            <div className="image-frame">
                                <div className="placeholder-lg">
                                    <div className="placeholder-icon">📖</div>
                                    <p>Our Journey</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Machinery & Technology */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Our Machinery & Technology</h2>
                    <p className="section-intro">
                        We invest in the latest printing technology to deliver superior results
                    </p>
                    <div className="machinery-grid">
                        <div className="machinery-card">
                            <div className="machinery-icon">⚙️</div>
                            <h3>Offset Printing Machines</h3>
                            <p>High-speed offset presses for large-volume, high-quality printing</p>
                        </div>
                        <div className="machinery-card">
                            <div className="machinery-icon">🖨️</div>
                            <h3>Digital Printers</h3>
                            <p>Modern digital printing for quick turnarounds and variable data</p>
                        </div>
                        <div className="machinery-card">
                            <div className="machinery-icon">🎨</div>
                            <h3>Screen Printing Setup</h3>
                            <p>Professional screen printing equipment for specialty applications</p>
                        </div>
                        <div className="machinery-card">
                            <div className="machinery-icon">✂️</div>
                            <h3>Finishing Equipment</h3>
                            <p>Die-cutting, lamination, and binding machines for perfect finishing</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section">
                <div className="container">
                    <div className="vision-mission-grid">
                        <div className="vm-card">
                            <div className="vm-icon">🎯</div>
                            <h2>Our Vision</h2>
                            <p>
                                To be the leading printing solutions provider in Tamil Nadu, known for
                                innovation, quality, and customer satisfaction. We aspire to set industry
                                standards and inspire others through our commitment to excellence.
                            </p>
                        </div>
                        <div className="vm-card">
                            <div className="vm-icon">💡</div>
                            <h2>Our Mission</h2>
                            <p>
                                To deliver world-class printing services that help our clients communicate
                                effectively and make lasting impressions. We strive to combine traditional
                                craftsmanship with modern technology while maintaining environmental responsibility.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-item">
                            <div className="value-number">01</div>
                            <h3>Quality First</h3>
                            <p>We never compromise on quality, ensuring every print meets the highest standards</p>
                        </div>
                        <div className="value-item">
                            <div className="value-number">02</div>
                            <h3>Customer Focus</h3>
                            <p>Your satisfaction is our priority, and we go the extra mile to exceed expectations</p>
                        </div>
                        <div className="value-item">
                            <div className="value-number">03</div>
                            <h3>Innovation</h3>
                            <p>We embrace new technologies and methods to deliver better results efficiently</p>
                        </div>
                        <div className="value-item">
                            <div className="value-number">04</div>
                            <h3>Integrity</h3>
                            <p>Honest communication and transparent dealings build lasting relationships</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;
