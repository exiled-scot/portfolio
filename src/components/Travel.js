import React, { useRef } from 'react';
import './Travel.css';
import sailing2 from '../assets/sailing2.png';
import sailing3 from '../assets/sailing3.png';
import sailing4 from '../assets/sailing4.png';
import camping1 from '../assets/camping1.jpg';
import dolphins1 from '../assets/dolphins.mp4';
import sailingvid1 from '../assets/sailing-vid1.mp4';

const Travel = () => {
    const dolphinsVideoRef = useRef(null);
    const sailingvidVideoRef = useRef(null);

    const handleMouseEnter = (videoRef) => {
        videoRef.current.play();
    };

    const handleMouseLeave = (videoRef) => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    };

    return (
        <>
            <div className='travel-container'>
                <h1 className='travel-title'>There is more to life than pixels on the screen...</h1>
                <div className='travel-img-columns'>
                    <div className="travel-left-container">
                        <div className="travel-img-container">
                            <img src={sailing2} className='travel-img' alt="Sailing 2" />
                        </div>
                        <div className="travel-img-container">
                            <video ref={sailingvidVideoRef} src={sailingvid1} className='travel-vid' loop muted onMouseEnter={() => handleMouseEnter(sailingvidVideoRef)} onMouseLeave={() => handleMouseLeave(sailingvidVideoRef)} />
                        </div>
                        <div id="dolphin1" className="travel-img-container inverted">
                            <video ref={dolphinsVideoRef} src={dolphins1} className='travel-vid' loop muted onMouseEnter={() => handleMouseEnter(dolphinsVideoRef)} onMouseLeave={() => handleMouseLeave(dolphinsVideoRef)} />
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
                    </div>
                    <div className='travel-right-column'>
                        <div className='travel-right-column-text'>
                            <div className='top-text'>
                                <p>Taking every day</p>
                            </div>
                            <div className='top-middle-text'>
                                <p>Building beautiful things</p>
                            </div>
                            <div className='middle-text'>
                                <p>Solving real problems</p>
                            </div>
                            <div className='bottom-middle-text'>
                                <p>Ruled by the sea</p>
                            </div>
                            <div className='bottom-text'>
                                <p>Remote-first opportunities</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Travel;
