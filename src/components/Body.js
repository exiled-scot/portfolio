import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Avatar from '../assets/Avatar.png';

const Body = () => {
    // Starting point: https://codepen.io/FacepalmRobot/pen/dGBKJB    

    const [txt, setTxt] = React.useState([
        "FORCE: XX0022. ENCYPT://000.222.2345",
        "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
        "RETRY: REINDEER FLOTILLA",
        "Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
        "================================================",
        "Priority 1 // local / scanning...",
        "scanning ports...",
        "BACKDOOR FOUND (23.45.23.12.00000000)",
        "BACKDOOR FOUND (13.66.23.12.00110000)",
        "BACKDOOR FOUND (13.66.23.12.00110044)",
        "...",
        "...",
        "BRUTE.EXE -r -z",
        "...locating vulnerabilities...",
        "...vulnerabilities found...",
        "MCP/> DEPLOY CLU",
        "SCAN: __ 0100.0000.0554.0080",
        "SCAN: __ 0020.0000.0553.0080",
        "SCAN: __ 0001.0000.0554.0550",
        "SCAN: __ 0012.0000.0553.0030",
        "SCAN: __ 0100.0000.0554.0080",
        "SCAN: __ 0020.0000.0553.0080",
    ]);

    const updateScreen = () => {
        setTxt((prevTxt) => [...prevTxt.slice(1), prevTxt[0]]);
    };

    useEffect(() => {
        const intervalID = setInterval(updateScreen, 200);

        return () => {
            clearInterval(intervalID);
        };
    }, [txt]);

    return (
        <div id="body" className="body">
            <div className="console-container">
                <div id="console">
                    {txt.map((text, index) => (
                        <p className='console-text' key={index}>{text}</p>
                    ))}
                </div>
            </div>
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-img" alt="avatar" src={Avatar} />

                    <div className="body-content">
                        <div className="body-headline">Scott Stevenson</div>
                        <div className="body-text">Full Stack Software</div>
                        <div className="msg-container">
                            <div className="msg">DEVELOPER</div>
                        </div>
                    </div>
                    <div className="body-icons">
                        <a
                            href="https://github.com/exiled-scot"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-link"
                        >
                            <i>
                                <FaGithub />
                            </i>{' '}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/scott-stevenson-676bb2a1/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-link"
                        >
                            <i>
                                <FaLinkedin />
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
