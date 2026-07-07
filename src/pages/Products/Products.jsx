import React, { useState } from 'react';
import './Products.css';

const products = [
    { id: 1, name: 'Custom Diaries', category: 'Stationery', price: 'From ₹150' },
    { id: 2, name: 'Registers', category: 'Stationery', price: 'From ₹80' },
    { id: 3, name: 'School Notebooks', category: 'Education', price: 'From ₹40' },
    { id: 4, name: 'Thambula Bags', category: 'Specialty', price: 'Custom Quote' },
    { id: 5, name: 'Wedding Invitations', category: 'Invitations', price: 'From ₹15/card' },
    { id: 6, name: 'Business Cards', category: 'Business', price: 'From ₹400/100' },
    { id: 7, name: 'Letterheads', category: 'Business', price: 'From ₹500/100' },
    { id: 8, name: 'Brochures', category: 'Marketing', price: 'From ₹5/piece' },
    { id: 9, name: 'Flyers', category: 'Marketing', price: 'From ₹3/piece' },
    { id: 10, name: 'Catalogs', category: 'Marketing', price: 'Custom Quote' },
    { id: 11, name: 'Greeting Cards', category: 'Invitations', price: 'From ₹20/card' },
    { id: 12, name: 'Custom Stickers', category: 'Specialty', price: 'From ₹100' },
];

const categories = ['All', 'Stationery', 'Business', 'Marketing', 'Invitations', 'Specialty', 'Education'];

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="products-page">
            {/* Hero */}
            <section className="products-hero">
                <div className="container">
                    <h1 className="page-title">Our Products</h1>
                    <p className="page-subtitle">Ready-Made and Custom Printing Solutions</p>
                </div>
            </section>

            {/* Products Section */}
            <section className="section">
                <div className="container">
                    {/* Category Filter */}
                    <div className="category-filter">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <div className="products-grid">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="product-card">
                                <div className="product-image">
                                    <div className="product-placeholder">
                                        <div className="product-icon">📦</div>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <span className="product-category">{product.category}</span>
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-price">{product.price}</p>
                                    <button className="btn btn-primary btn-small">Get Quote</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="no-products">
                            <p>No products found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="cta-content">
                        <h2>Don't See What You're Looking For?</h2>
                        <p>We offer custom printing solutions for unique requirements. Contact us to discuss your project!</p>
                        <button className="btn btn-primary">Contact Us</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
