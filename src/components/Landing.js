import React, { useState, useEffect } from 'react';
import './Landing.css';

const Landing = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(false);
    }, 10000); // 10 seconds

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="body">
            <div className="typing">Hello, friend!</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Landing;
