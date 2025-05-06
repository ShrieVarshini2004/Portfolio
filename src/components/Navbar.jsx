import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  // Your Medium profile URL
  const mediumUrl = "https://medium.com/@shrievarshini.offl";

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">SV</span>
        </Link>
        
        <div className="navbar-right">
          <div className={`navbar-links ${menuOpen ? 'show' : ''}`}>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/projects" className={location.pathname.includes('/projects') ? 'active' : ''}>Projects</Link>
            <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>Experience</Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
            <a 
              href={mediumUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="navbar-blog-link"
            >
              Blog
            </a>
          </div>

          <button className="dark-mode-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {darkMode ? '🌞' : '🌜'}
          </button>
          
          <div 
            className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;