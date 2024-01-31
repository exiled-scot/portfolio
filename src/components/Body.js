import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Avatar from '../assets/Avatar.png';
import { FaGrav } from "react-icons/fa";
import './Body.css';

const Body = () => {
    return (
        <div id="body" className="body">
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
                            href="https://nihilanth.co.uk/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-link"
                        >
                            <i>
                                <FaGrav />
                            </i>
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
