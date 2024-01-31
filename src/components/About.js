import React from 'react';
import './About.css';
import Kali from '../assets/Kali.png';

const About = () => {
  return (
    <div id="about" className="about">
      <h1 className="about-heading">About Me</h1>
      <div className="content-container">
        <div className="text-container">
          <div className="about-text">
            <p>I am a full stack software developer from Scotland.
              I worked as a security tester and software developer for a boutique security company near Edinburgh.
              I tested code before it went into production, finding security vulnerabilities and risks associated with bad software design.</p>
          </div>
        </div>
        <img src={Kali} alt="Kali Linux" className="about-image" />
      </div>
    </div>
  );
};

export default About;
