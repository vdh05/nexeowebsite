// HiddenButton.js
import React from 'react';
import './hiddenButton.css';

const HiddenButton = ({ toggleMenu }) => {
  return (
    <div>
    <button className="hidden-button" onClick={toggleMenu}>
      ≡ {/* Unicode character for hamburger menu */}
    </button>
    <li>home</li>
    <li>about us</li>
    </div>
  );
};

export default HiddenButton;
