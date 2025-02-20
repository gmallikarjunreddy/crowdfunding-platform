import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // Import your ThemeContext

const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext); // Use context to get dark mode state

    return (
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
};

export default DarkModeToggle; 