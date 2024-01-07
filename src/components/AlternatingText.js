import React from 'react';

const AlternatingText = ({ text, image, position }) => {
  const isLeftPosition = position === 'left';
  const isNarrowScreen = window.innerWidth <= 1200; // Check if screen width is narrow

  return (
    <div
      className={`at-info ${isLeftPosition && isNarrowScreen ? 'at-info-reverse' : ''}`}
    >
      {isLeftPosition ? (
        <>
          <p className="at-text">{text}</p>
          <div className='at-img'>
            <img src={image} alt="Image" />
          </div>
        </>
      ) : (
        <>
          <div className='at-img'>
            <img src={image} alt="Image" />
          </div>
          <p className="at-text">{text}</p>
        </>
      )}
    </div>
  );
};

export default AlternatingText;
