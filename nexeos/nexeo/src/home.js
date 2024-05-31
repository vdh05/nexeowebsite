import React, { useState, useEffect } from "react";
import "./home.css";
import CircularQueue from './CircularQueue'; // Import the class

const arr = ["GROWTH", "TECHNOLOGY", "SECURITY", "PROTECTION", "FREEDOM"];

function Home() {
  const [typedText, setTypedText] = useState(""); // New state for typed text
  const [wordQueue, setWordQueue] = useState(new CircularQueue(arr.length)); // Queue for words

  useEffect(() => {
    // Initialize queue with all words
    arr.forEach((word) => wordQueue.enqueue(word));

    const timeoutId = setInterval(() => {
      if (wordQueue.isEmpty()) return; // Stop if queue is empty

      const currentWord = wordQueue.dequeue();
      let newTypedText = "";

      // Simulate typing effect (adjust speed as needed)
      for (let i = 0; i < currentWord.length; i++) {
        setTimeout(() => {
          newTypedText = currentWord.substring(0, i + 1);
          setTypedText(newTypedText);
        }, i * 50); // Adjust delay between characters (50ms here)
      }

      // Re-enqueue the displayed word at the back of the queue
      wordQueue.enqueue(currentWord);
    }, 3000); // Update text every 3 seconds (adjust as needed)

    return () => clearInterval(timeoutId); // Clean up interval on unmount
  }, []);

  return (
    <div className="home-container">
      <div className="parent">
        
        <div className="child">
          <div className="titletext">
            <h1>NEXEO FOR</h1>
            <div className="sub-title">
              <span className="typed-text">{typedText}</span> 
            </div>
            </div>
            </div>

         <div className="child">
          
          <figure className="imagecss">
            <img src="home.png" alt="home" />
          </figure>
          </div>
        <figure className="img2">
          <img src="cybersecurity.png" alt="cybersecurity" />
        </figure>
        <h2 className="cybertext">WHY CHOOSE US FOR YOUR<br />CYBERSECURITY NEEDS?</h2>
        <p className="responsive-subtext">Choose us to gain a holistic understanding of your cybersecurity posture and fortify your defenses with a trusted partner.</p>
      </div>
      </div>
  );
}

export default Home;
