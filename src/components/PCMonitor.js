import React, { useEffect } from 'react';
import IMG from '../assets/pc.png';
import './PCMonitor.css'; // Create a CSS file for styling

const PCMonitor = () => {
    useEffect(() => {
        // Calculate the center point of the image
        const image = document.getElementById('pc-image');
        const imageWidth = image.clientWidth;
        const imageHeight = image.clientHeight;
        const centerX = imageWidth / 2;
        const centerY = imageHeight / 2;

        // Create a text element
        const textElement = document.createElement('p');
        textElement.innerText = 'Your Text Here';

        // Set the text styling
        textElement.classList.add('centered-text'); // Apply CSS class for styling

        // Position the text in the center of the image
        textElement.style.transform = `translate(-50%, -50%)`;
        textElement.style.position = 'absolute';
        textElement.style.top = '50%';
        textElement.style.left = '50%';

        // Append the text to the image container
        image.parentNode.appendChild(textElement);
    }, []);

    return (
        <div className="image-container">
            <div class="noise"></div>
            <div class="overlay"></div>
            <img id="pc-image" src={IMG} alt="Something went wrong" />
            <div className="square"></div>
        </div>
    );

};

export default PCMonitor;
