import React, { useState, useEffect } from 'react';
import ThemeController from '../../utils/ThemeController';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('dark');
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Subscribe to theme changes
        ThemeController.subscribe((newTheme) => {
            setTheme(newTheme);
        });

        // Set initial theme
        setTheme(ThemeController.getTheme());
    }, []);

    const handleToggle = () => {
        if (isAnimating) return; // Prevent double clicks

        setIsAnimating(true);
        ThemeController.toggle();

        setTimeout(() => {
            setIsAnimating(false);
        }, 400);
    };

    return (
        <button
            className={`theme-toggle ${isAnimating ? 'animating' : ''}`}
            onClick={handleToggle}
            aria-label="Toggle theme"
        >
            <span className={`icon icon-${theme}`}>
                {theme === 'dark' ? '🌙' : '☀️'}
            </span>
        </button>
    );
};

export default ThemeToggle;
