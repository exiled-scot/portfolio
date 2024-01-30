import React, { useState, useEffect } from 'react';
import './Landing.css';

const Landing = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const handleTimeout = () => {
      setShowPopup(false);
    };

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      const newTimeoutId = setTimeout(handleTimeout, 10);
      setTimeoutId(newTimeoutId);
    };

    const handleKeyPress = (event) => {
      if (
        event.key === 'Enter' ||
        event.key === ' ' ||
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown' ||
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowRight'
      ) {
        resetTimeout();
      }
    };

    const handleScroll = () => {
      resetTimeout();
    };

    const startTimeout = () => {
      const newTimeoutId = setTimeout(handleTimeout, 10000);
      setTimeoutId(newTimeoutId);
    };

    startTimeout();

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('wheel', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="landing-body">
            <div className="typewriter">
              <h1>Hello, friend!</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Landing;
