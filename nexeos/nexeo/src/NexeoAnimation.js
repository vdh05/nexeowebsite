import React, { useState, useRef, useEffect } from 'react';
import './Animation.css'; 
import Logon from './image/NLOGO.svg';
import LogoE from './image/ELOGO.svg';
import LogoX from './image/XLOGO.svg';
import LogoO from './image/OLOGO.svg';

const NexeoAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const containerRef = useRef(null);
  const nLogoRef = useRef(null);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="animation-container">
    
      <div className="logo-container">
        <img
          ref={nLogoRef} 
          src={Logon}
          alt="Nexeo Logo"
          className="n-logo" 
        />
    
      </div>
      <div className="logo-container">
        <img
          ref={nLogoRef} 
          src={LogoE}
          alt="Nexeo Logo"
          className='e-logo'
      
        />
 </div>
  
 <div className="logo-container">
        <img
          ref={nLogoRef}
          src={LogoX}
          alt="Nexeo Logo"
          className='x-logo'
           
        />
 </div>
 <div className="logo-container">
        <img
          ref={nLogoRef}
          src={LogoE}
          alt="Nexeo Logo"
          className='e1-logo'
        
        />
 </div>
 <div className="logo-container">
        <img
          ref={nLogoRef} 
          src={LogoO}
          alt="Nexeo Logo"
          className='O-logo'
        
        />
 </div>
    </div>
  );
};

export default NexeoAnimation;
