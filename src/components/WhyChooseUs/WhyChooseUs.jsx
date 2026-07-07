import React from 'react';
import './WhyChooseUs.css';

const services = [
    {
        id: 1,
        title: 'Offset Printing',
        description: 'High-quality offset printing for brochures, catalogs, and more with vibrant colors.',
        icon: '📰',
    },
    {
        id: 2,
        title: 'Screen Printing',
        description: 'Durable screen printing for invitations, flags, and promotional materials.',
        icon: '🎨',
    },
    {
        id: 3,
        title: 'Graphic Design',
        description: 'Professional design services that bring your brand vision to life with creativity.',
        icon: '✨',
    },
    {
        id: 4,
        title: 'Digital Printing',
        description: 'Fast turnaround digital printing for all your urgent and small-batch needs.',
        icon: '🖨️',
    },
    {
        id: 5,
        title: 'Binding Services',
        description: 'Expert binding for notebooks, registers, diaries, and professional documents.',
        icon: '📚',
    },
    {
        id: 6,
        title: 'Post Printing',
        description: 'Complete finishing services including lamination, cutting, and packaging.',
        icon: '✂️',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us section section-dark">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Our Services</span>
                    <h2 className="section-heading">Why Choose Saravana Printers?</h2>
                    <p className="section-description">
                        We offer comprehensive printing solutions backed by years of experience and
                        state-of-the-art technology. Your success is our mission.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`service-card animate-scaleIn stagger-${index + 1}`}
                        >
                            <div className="card-glow"></div>
                            <div className="card-content">
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
