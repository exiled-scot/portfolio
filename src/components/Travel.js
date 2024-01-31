import React from 'react';
import './Travel.css';
import sailing2 from '../assets/sailing2.png';
import sailing3 from '../assets/sailing3.png';
import sailing4 from '../assets/sailing4.png';
import sailing5 from '../assets/sailing5.png';


const Travel = () => {
    return (
        <>
            <div className='travel-container'>
                <div class="travel-img-container">
                    <img src={sailing2} className='travel-img' />
                </div>
                <div class="travel-img-container inverted">
                    <img src={sailing3} className='travel-img' />
                </div>
                <div class="travel-img-container">
                    <img src={sailing4} className='travel-img' />
                </div>
                <div class="travel-img-container">
                    <img src={sailing5} className='travel-img' />
                </div>
                <div class="travel-img-container">
                    <img src={sailing5} className='travel-img' />
                </div>
            </div>
        </>
    );
}

export default Travel;
