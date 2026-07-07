import React, { useState } from 'react';
import './PortfolioTabs.css';

const portfolioData = {
    packaging: [
        { id: 1, title: 'Product Box Design', category: 'Packaging' },
        { id: 2, title: 'Food Packaging', category: 'Packaging' },
        { id: 3, title: 'Gift Box Printing', category: 'Packaging' },
        { id: 4, title: 'Custom Cartons', category: 'Packaging' },
    ],
    flyer: [
        { id: 5, title: 'Business Flyer', category: 'Flyer' },
        { id: 6, title: 'Event Promotion', category: 'Flyer' },
        { id: 7, title: 'Real Estate Flyer', category: 'Flyer' },
        { id: 8, title: 'Restaurant Menu', category: 'Flyer' },
    ],
    catalog: [
        { id: 9, title: 'Product Catalog', category: 'Catalog' },
        { id: 10, title: 'Company Brochure', category: 'Catalog' },
        { id: 11, title: 'Annual Report', category: 'Catalog' },
        { id: 12, title: 'Service Portfolio', category: 'Catalog' },
    ],
    diecut: [
        { id: 13, title: 'Custom Shapes', category: 'Diecut' },
        { id: 14, title: 'Business Cards', category: 'Diecut' },
        { id: 15, title: 'Promotional Tags', category: 'Diecut' },
        { id: 16, title: 'Stickers & Labels', category: 'Diecut' },
    ],
    invitations: [
        { id: 17, title: 'Wedding Invitation', category: 'Invitations' },
        { id: 18, title: 'Birthday Cards', category: 'Invitations' },
        { id: 19, title: 'Corporate Events', category: 'Invitations' },
        { id: 20, title: 'Greeting Cards', category: 'Invitations' },
    ],
};

const PortfolioTabs = () => {
    const [activeTab, setActiveTab] = useState('packaging');

    return (
        <section className="portfolio-tabs section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Our Work</span>
                    <h2 className="section-heading">What We Do</h2>
                    <p className="section-description">
                        Explore our portfolio of premium printing projects across various categories.
                    </p>
                </div>

                {/* Tab Menu */}
                <div className="tab-menu">
                    <button
                        className={`tab-button ${activeTab === 'packaging' ? 'active' : ''}`}
                        onClick={() => setActiveTab('packaging')}
                    >
                        Packaging
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'flyer' ? 'active' : ''}`}
                        onClick={() => setActiveTab('flyer')}
                    >
                        Flyer
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'catalog' ? 'active' : ''}`}
                        onClick={() => setActiveTab('catalog')}
                    >
                        Catalog
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'diecut' ? 'active' : ''}`}
                        onClick={() => setActiveTab('diecut')}
                    >
                        Diecut
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'invitations' ? 'active' : ''}`}
                        onClick={() => setActiveTab('invitations')}
                    >
                        Invitations
                    </button>
                </div>

                {/* Portfolio Grid */}
                <div className="portfolio-grid" key={activeTab}>
                    {portfolioData[activeTab].map((item, index) => (
                        <div
                            key={item.id}
                            className={`portfolio-item animate-scaleIn stagger-${(index % 4) + 1}`}
                        >
                            <div className="portfolio-image">
                                <div className="image-placeholder">
                                    <div className="placeholder-icon">📄</div>
                                    <p className="placeholder-text">{item.category}</p>
                                </div>

                                {/* Glassmorphism Overlay */}
                                <div className="portfolio-overlay">
                                    <div className="overlay-content">
                                        <h3 className="portfolio-title">{item.title}</h3>
                                        <div className="portfolio-divider"></div>
                                        <button className="view-details-btn">VIEW DETAILS</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioTabs;
