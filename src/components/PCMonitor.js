import React, { useEffect } from 'react';
import IMG from '../assets/pc.png';
import './PCMonitor.css';

const PCMonitor = () => {
    return (
        <div className="image-container">
            <p className="pc-text">Your Text is Here</p>
            <img className="pc-image" src={IMG} alt="Something went wrong" />
            <div className="noise"></div>
            <div className="overlay"></div>
            <div className="square"></div>
        </div>
    );
};

export default PCMonitor;
