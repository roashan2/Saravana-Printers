import React, { useState, useEffect, useRef } from 'react';
import './HeroSlider.css';

// Hero background images
import digitalBg1 from '../../assets/hero/digital-printer-1.jpg';
import offsetBg from '../../assets/hero/offset-printer.jpg';
import digitalBg2 from '../../assets/hero/digital-printer-2.jpg';

// Poster images
import offsetPoster from '../../assets/hero/offset-samples.jpg';
import brochuresPoster from '../../assets/hero/brochures-poster.jpg';

const slides = [
    {
        id: 1,
        title: 'Offset Printing Excellence',
        subtitle: 'Premium Quality for Your Business',
        description: 'From brochures to catalogs, we deliver precision printing that makes your brand shine. Our state-of-the-art offset printing technology ensures vibrant colors and sharp details.',
        category: 'Offset Printing',
        backgroundImage: offsetBg,
        posterImage: offsetPoster,
    },
    {
        id: 2,
        title: 'Creative Graphic Design',
        subtitle: 'Transform Ideas into Visual Stories',
        description: 'Our expert design team brings your vision to life with stunning graphics that capture attention and communicate your message effectively.',
        category: 'Graphic Design',
        backgroundImage: digitalBg2,
        posterImage: brochuresPoster,
    },
    {
        id: 3,
        title: 'Digital & Screen Printing',
        subtitle: 'Modern Solutions for Every Need',
        description: 'Whether it\'s digital printing for quick turnarounds or screen printing for lasting impressions, we have the perfect solution for your project.',
        category: 'Digital Printing',
        backgroundImage: digitalBg1,
        posterImage: brochuresPoster,
    },
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const intervalRef = useRef(null);
    const heroRef = useRef(null);
    const backgroundRef = useRef(null);
    const overlayRef = useRef(null);

    // Auto-advance slider every 5 seconds
    const resetInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
    };

    useEffect(() => {
        resetInterval();
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    // Scroll effect for OTT-style parallax
    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) return;

            const scrollY = window.scrollY;
            const heroHeight = window.innerHeight;
            const progress = Math.min(scrollY / heroHeight, 1);

            setScrollProgress(progress);

            // Apply scroll effects
            if (backgroundRef.current && overlayRef.current) {
                // Parallax zoom effect
                const scale = 1 + (progress * 0.1); // Scale from 1 to 1.1
                backgroundRef.current.style.transform = `scale(${scale})`;

                // Progressive blur
                const blur = progress * 10; // 0 to 10px
                backgroundRef.current.style.filter = `blur(${blur}px)`;

                // Overlay fade-in
                overlayRef.current.style.opacity = progress * 0.7; // 0 to 0.7
            }
        };

        // Throttle scroll event for performance
        let ticking = false;
        const scrollListener = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', scrollListener);
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', scrollListener);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        resetInterval();
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        resetInterval();
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        resetInterval();
    };

    // Touch handlers for mobile swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <div
            ref={heroRef}
            className="hero-slider hero-ott-fixed"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Scroll overlay - darkens as user scrolls */}
            <div ref={overlayRef} className="hero-scroll-overlay" />
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`hero-slide ${index === currentSlide ? 'active' : ''} ${index === currentSlide - 1 || (currentSlide === 0 && index === slides.length - 1)
                        ? 'prev'
                        : ''
                        } ${index === currentSlide + 1 || (currentSlide === slides.length - 1 && index === 0)
                            ? 'next'
                            : ''
                        }`}
                >
                    {/* Blurred Background */}
                    <div
                        ref={index === currentSlide ? backgroundRef : null}
                        className="hero-background hero-background-layer"
                        style={{
                            backgroundImage: slide.backgroundImage
                                ? `linear-gradient(135deg, rgba(15, 23, 42, 0.7), rgba(249, 115, 22, 0.4)), url(${slide.backgroundImage})`
                                : `linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(249, 115, 22, 0.4))`,
                        }}
                    />

                    {/* Content */}
                    <div className="hero-content container">
                        <div className="hero-text">
                            <span className="hero-category">{slide.category}</span>
                            <h1 className="hero-title">{slide.title}</h1>
                            <h2 className="hero-subtitle">{slide.subtitle}</h2>
                            <p className="hero-description">{slide.description}</p>
                            <div className="hero-actions">
                                <button className="btn btn-primary">Get Started</button>
                                <button className="btn btn-outline">Learn More</button>
                            </div>
                        </div>

                        {/* Floating Poster Image */}
                        <div className="hero-poster">
                            <div className="poster-frame">
                                {slide.posterImage ? (
                                    <img
                                        src={slide.posterImage}
                                        alt={slide.category}
                                        className="poster-image"
                                    />
                                ) : (
                                    <div className="poster-placeholder">
                                        <div className="poster-icon">🖨️</div>
                                        <p className="poster-text">{slide.category}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Controls */}
            <button className="hero-nav hero-nav-prev" onClick={prevSlide} aria-label="Previous slide">
                ‹
            </button>
            <button className="hero-nav hero-nav-next" onClick={nextSlide} aria-label="Next slide">
                ›
            </button>

            {/* Dots Indicator */}
            <div className="hero-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
