import React, { useState, useRef } from 'react';
import IMG from '../assets/pc.png';
import './PCMonitor.css';

const PCMonitor = () => {
    const [inputValue, setInputValue] = useState('');
    const [output, setOutput] = useState('');
    const [isInputShrunk, setIsInputShrunk] = useState(false);
    const inputRef = useRef(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setIsInputShrunk(e.target.value !== '');
    };

    const handleEnterPress = (e) => {
        if (e.key === 'Enter') {
            setOutput((prevOutput) => {
                const newOutput = `${prevOutput}${inputValue}\n`;
                return newOutput.slice(0, -1); // Remove the last character ('\n')
            });
            setInputValue('');
            setIsInputShrunk(false);
            if (e.target.value.length > 0) {
                e.target.value = ''; // Clear the textarea value directly
            }
        }
    };

    const handleMouseOver = () => {
        inputRef.current.focus();
    };

    return (
        <div className={`image-container ${isInputShrunk ? 'shrink' : ''}`}>
            <img className="pc-image" src={IMG} alt="Something went wrong" />
            <div className="noise"></div>
            <div className="overlay"></div>
            <div className="square" onMouseOver={handleMouseOver}>
                <pre className="terminal-output">{output}</pre>
                <div className="input-container">
                    <span className="input-symbol">&gt;</span>
                    <textarea
                        className="console-input"
                        rows="1"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleEnterPress}
                        ref={inputRef}
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default PCMonitor;
