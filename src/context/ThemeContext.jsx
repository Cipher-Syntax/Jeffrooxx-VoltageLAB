import { useEffect, useState } from 'react';
import ThemeContextValue from './themeContextValue';

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') return 'dark';
        return window.localStorage.getItem('voltagelab-theme') || 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.toggle('dark', theme === 'dark');
        root.style.colorScheme = theme;
        window.localStorage.setItem('voltagelab-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContextValue.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContextValue.Provider>
    );
};
