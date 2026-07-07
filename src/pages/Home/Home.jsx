import React from 'react';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import AboutSection from '../../components/AboutSection/AboutSection';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import PortfolioTabs from '../../components/PortfolioTabs/PortfolioTabs';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Fixed Hero Section */}
            <HeroSlider />

            {/* Scrollable Content Container - scrolls over hero */}
            <div className="content-scroll-container">
                <AboutSection />
                <WhyChooseUs />
                <PortfolioTabs />
            </div>
        </div>
    );
};

export default Home;
