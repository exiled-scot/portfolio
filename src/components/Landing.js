import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const Landing = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // This useEffect hook runs once, on initial component load

    // Add a small timeout to show the popup for a few seconds before hiding it
    const timeout = setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, []); // Empty dependency array ensures this effect only runs once

  return (
    <Modal isOpen={showPopup}>
      <div>Hello, friend!</div>
    </Modal>
  );
}

export default Landing;
