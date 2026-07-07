/**
 * ThemeController - Manages light/dark theme state
 * Singleton pattern for global theme management
 */
class ThemeController {
    constructor() {
        this.theme = 'dark'; // Default theme
        this.listeners = [];
    }

    /**
     * Initialize theme from localStorage or default
     */
    init() {
        const savedTheme = localStorage.getItem('theme');
        this.theme = savedTheme || 'dark';
        this.applyTheme();
    }

    /**
     * Toggle between light and dark mode
     */
    toggle() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme();
        this.saveTheme();
        this.notifyListeners();
    }

    /**
     * Apply theme to document
     */
    applyTheme() {
        if (this.theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }

    /**
     * Save theme preference to localStorage
     */
    saveTheme() {
        localStorage.setItem('theme', this.theme);
    }

    /**
     * Get current theme
     */
    getTheme() {
        return this.theme;
    }

    /**
     * Subscribe to theme changes
     */
    subscribe(callback) {
        this.listeners.push(callback);
    }

    /**
     * Notify all listeners of theme change
     */
    notifyListeners() {
        this.listeners.forEach(callback => callback(this.theme));
    }
}

// Export singleton instance
export default new ThemeController();
