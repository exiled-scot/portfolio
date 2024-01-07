import React from 'react';

const AlternatingText = ({ text, image, position }) => {
  const isLeftPosition = position === 'left';

  return (
    <div
      className={`at-info ${isLeftPosition ? 'at-info-reverse' : ''}`}
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
