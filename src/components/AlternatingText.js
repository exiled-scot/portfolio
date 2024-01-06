import React from 'react';

const AlternatingText = ({ text, image, position }) => {
  return (
    <div className="at-info">
      {position === 'right' ? (
        <>
          <p className="at-text right">{text}</p>
          <div className='at-img'>
            <img src={image} alt="Image" />
          </div>
        </>
      ) : (
        <>
          <div className='at-img'>
            <img src={image} alt="Image" />
          </div>
          <p className="at-text left">{text}</p>
        </>
      )}
    </div>
  );
};

export default AlternatingText;
