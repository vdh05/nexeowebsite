import React, { useState, useEffect } from 'react';
import NexeoAnimation from './NexeoAnimation';
import Header from './header';
import Home from './home'; // Import your Home component



function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      
      <div style={{ gridColumn: "1 / 3", marginTop: "10px", paddingTop: "10px", position: "sticky" }}>
      
        {isMobile && <Home />} {/* Render Home component for screens < 500px */}
        {!isMobile && <Header />} {/* Render Header for screens >= 500px */}
      </div>
      <NexeoAnimation />
    </div>
  );
}

export default App;
