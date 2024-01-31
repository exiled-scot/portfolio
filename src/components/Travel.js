import React from 'react';
import './Travel.css';
import sailing2 from '../assets/sailing2.png';
import sailing3 from '../assets/sailing3.png';
import sailing4 from '../assets/sailing4.png';
import sailing5 from '../assets/sailing5.png';


const Travel = () => {
    return (
        <>
            <div class="img-container">
                <img src={sailing2} />
            </div>
            <div class="img-container">
                <img src={sailing3} />
            </div>
            <div class="img-container">
                <img src={sailing4} />
            </div>
            <div class="img-container">
                <img src={sailing5} />
            </div>

        </>
    );
}

export default Travel;
