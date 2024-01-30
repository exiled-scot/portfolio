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
          <div class="landing-body">
            <div class="typewriter">
              <h1>Hello, friend!</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Landing;
