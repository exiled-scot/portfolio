// Header.js

import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPercentage: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollHeight = documentHeight - windowHeight;
    const scrollPercentage = (window.scrollY / scrollHeight) * 100;
    this.setState({ scrollPercentage });
  };

  render() {
    const { scrollPercentage } = this.state;

    return (
      <div className="header">
        <div className="header-logo">
          <a href="#app">
            <h3 className="header-name">Scott Stevenson</h3>
          </a>
        </div>
        <div className="header-container">
          <div className="nav-item">
            <a href="#about">About</a>
          </div>
          <div className="nav-item">
            <a href="#projects">Projects</a>
          </div>
          <div className="nav-item">
            <a href="#skills">Skills</a>
          </div>
          <div className="nav-item">
            <a href="#footer">Contact</a>
          </div>
        </div>
        <div className="progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
      </div>
    );
  }
}

export default Header;
