import React, { useState, useRef, useEffect } from 'react';
import IMG from '../assets/pc.png';
import './PCMonitor.css';

const PCMonitor = () => {
    const [inputValue, setInputValue] = useState('');
    const [output, setOutput] = useState('Hello, friend\n');
    const [isInputShrunk, setIsInputShrunk] = useState(false);
    const inputRef = useRef(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setIsInputShrunk(e.target.value !== '');
    };

    const handleEnterPress = (e) => {
        if (e.key === 'Enter') {
            setOutput((prevOutput) => {
                const newOutput = `${prevOutput}${inputValue}`;
                return newOutput;
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
    
    // Run this effect only once when the component is first rendered
    useEffect(() => {
        // Focus the input when the component first loads
        inputRef.current.focus();
    }, []);

    return (
        <div className="pc-monitor">
            <div className={`image-container ${isInputShrunk ? 'shrink' : ''}`}>
                <img className="pc-image" src={IMG} alt="Something went wrong" />
                <div className="noise"></div>
                <div className="overlay"></div>
                <div className="square" onMouseOver={handleMouseOver}>
                    <pre className="terminal-output">{output}</pre>
                    <div className="input-container">
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
        </div>
    );
};

export default PCMonitor;
