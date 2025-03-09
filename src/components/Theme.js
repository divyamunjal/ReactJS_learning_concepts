import React from 'react'
import { useTheme } from '../context/themeContext'
import '../assets/styles/Theme.css';
import Error from './Error';

const Theme = () => {
    const {isDarkMode,toggleTheme} = useTheme();
  return (
    <div className={`container mt-5 ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <h1 className="text-primary">Theme Example !</h1>

      <input type="checkbox" defaultChecked={isDarkMode} onChange={toggleTheme} /> Change Theme

    </div>
  )
}

export default Theme
