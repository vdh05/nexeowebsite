import React, { useState, useEffect } from 'react';
import './header.css';
import Home from './home.js';
import About from './about.js';
import Service from './service.js';
import Contact from './contact.js';
import HiddenButton from './hiddenbutton.js';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setIsMenuOpen(false); // Close the menu on tab click

    const contentSection = document.getElementById(tabName);
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div>
      <header className={`navbar ${isSticky ? 'sticky' : ''}`}>
      
        <div className="navbar-content">
        <HiddenButton toggleMenu={toggleMenu} />  
          <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a
              href="#home"
              className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => handleTabClick('home')}
            >
              HOME
            </a>
            <a
              href="#service"
              className={`nav-link ${activeTab === 'service' ? 'active' : ''}`}
              onClick={() => handleTabClick('service')}
            >
              SERVICE
            </a>
            <a
              href="#about"
              className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => handleTabClick('about')}
            >
              ABOUT US
            </a>
            <a
              href="#contact"
              className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => handleTabClick('contact')}
            >
              CONTACT US
            </a>
          </nav>
        </div>
      </header>
      <div>
        {activeTab === 'home' && <Home id="home" />}
        {activeTab === 'about' && <About id="about" />}
        {activeTab === 'service' && <Service id="service" />}
        {activeTab === 'contact' && <Contact id="contact" />}
      </div>
    </div>
  );
}

export default Header;
