import React, { useRef, useEffect } from 'react';
import './Travel.css';
import sailing2 from '../assets/sailing2.png';
import sailing3 from '../assets/sailing3.png';
import sailing4 from '../assets/sailing4.png';
import camping1 from '../assets/camping1.jpg';
import dolphins1 from '../assets/dolphins.mp4';

const Travel = () => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        videoRef.current.play();
    };

    const handleMouseLeave = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    };

    useEffect(() => {
        const videoElement = videoRef.current;
        videoElement.addEventListener('mouseenter', handleMouseEnter);
        videoElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            videoElement.removeEventListener('mouseenter', handleMouseEnter);
            videoElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <>
            <div className='travel-container'>
                <div className="travel-img-container">
                    <img src={sailing2} className='travel-img' alt="Sailing 2" />
                </div>
                <div className="travel-img-container inverted">
                    <img src={sailing3} className='travel-img' alt="Sailing 3" />
                </div>
                <div className="travel-img-container">
                    <img src={sailing4} className='travel-img' alt="Sailing 4" />
                </div>
                <div className="travel-img-container">
                    <img src={camping1} className='travel-img' alt="Camping 1" />
                </div>
                <div className="travel-img-container inverted">
                    <video ref={videoRef} src={dolphins1} className='travel-vid' loop muted />
                </div>
            </div>
        </>
    );
}

export default Travel;
