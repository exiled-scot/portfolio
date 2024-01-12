import React, { useState, useRef, useEffect } from 'react';
import IMG from '../assets/pc.png';
import './PCMonitor.css';

const PCMonitor = () => {
    const [inputValue, setInputValue] = useState('');
    const [output, setOutput] = useState('Hello, friend\n');
    const [isInputShrunk, setIsInputShrunk] = useState(false);
    const [circleColor, setCircleColor] = useState('red');
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [isComponentVisible, setComponentVisible] = useState(false);

    const cddrive = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qQx2cwjHkLoWAEHj31dz7QHaE7%26pid%3DApi&f=1&ipt=e57d5bcf01be62cb5540bd1a0d071cb51a9786ce23e3a02d18b01196f5b44b2f&ipo=images';

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

    const handleButtonClick = () => {
        setCircleColor((prevColor) => (prevColor === 'red' ? 'green' : 'red'));
        setIsButtonClicked(true);
        setComponentVisible((prevState) => !prevState);
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
            <div
                className="image-container">
                <img className="pc-image" src={IMG} alt="Something went wrong" />
                <div
                    className="circle"
                    style={{ backgroundColor: circleColor }}
                    onClick={handleButtonClick}
                ></div>
                <div className={`pc-components ${isComponentVisible ? '' : 'hidden'}`}>
                    <div className="noise"></div>
                    <div className="overlay"></div>
                    <img className="cddrive" src={cddrive} />
                    <div className="square" onMouseOver={handleMouseOver}>
                        <pre className="terminal-output hide-scrollbar">{output}</pre>
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
        </div>
    );
};

export default PCMonitor;
