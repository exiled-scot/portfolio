import React, { useState, useRef } from 'react';
import IMG from '../assets/pc.png';
import './PCMonitor.css';

const PCMonitor = () => {
    const [inputValue, setInputValue] = useState(''); // State to hold the input value
    const [output, setOutput] = useState(''); // State to hold the console output
    const [isInputShrunk, setIsInputShrunk] = useState(false); // State to track if the input field is shrunk
    const inputRef = useRef(null); // Create a ref for the input field

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setIsInputShrunk(e.target.value !== '');
    };

    const handleEnterPress = (e) => {
        if (e.key === 'Enter') {
            // Process the command here and update the output
            setOutput((prevOutput) => `${prevOutput}${inputValue}\n`);
            setInputValue('');
            setIsInputShrunk(false);
        }
    };

    const handleMouseOver = () => {
        inputRef.current.focus(); // Focus the input field when mouse is over
    };

    return (
        <div className={`image-container ${isInputShrunk ? 'shrink' : ''}`}>
            <img className="pc-image" src={IMG} alt="Something went wrong" />
            <div className="noise"></div>
            <div className="overlay"></div>
            <div className="square" onMouseOver={handleMouseOver}>
                <pre className="terminal-output">{output}</pre> {/* Display console output */}
                <textarea
                    className="console-input"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleEnterPress}
                    ref={inputRef} // Set the ref for the input field
                ></textarea> {/* Input field */}
            </div>
        </div>
    );
};

export default PCMonitor;
