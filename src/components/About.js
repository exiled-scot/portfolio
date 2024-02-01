import React from 'react';
import './About.css';
import Kali from '../assets/Kali.png';
import screenshot from '../assets/code.png';
import laptop from '../assets/laptop.jpeg';

const About = () => {
  return (
    <div id="about" className="about">
      <h1 className="about-heading">About Me</h1>
      <div className="content-container">
        <div className="text-container">
          <div className="about-text">
            <p>I am a full stack software developer from Scotland.</p>
          </div>
        </div>
        <img src={Kali} alt="Kali Linux" className="about-image" />
      </div>

      <div className="content-container">
        <div className="text-container">
          <div className="about-text">
            <p>I have worked as a security tester and software developer for a boutique security company near Edinburgh.</p>
          </div>
        </div>
        <img src={screenshot} alt="Screenshot" className="about-image" />
      </div>

      <div className="content-container">
        <div className="text-container">
          <div className="about-text">
            <p>I then moved to the Netherlands for a year before going traveling and volunteering.</p>
          </div>
        </div>
        <img src={laptop} alt="laptop" className="about-image" />
      </div>

    </div>
  );
};

export default About;
