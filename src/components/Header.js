// Header.js

import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPercentage: 0,
      isHovered: false,
    };
  }

  handleHover = () => {
    this.setState((prevState) => ({
      isHovered: !prevState.isHovered,
    }));
  };

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
        <div className="header-logo" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
          <h3 className="header-name">
            {this.state.isHovered ? "RESUMÉ" : "SCOTT STEVENSON"}
          </h3>
        </div>
        <div className="header-container">
          <div className="nav-item">
            <a href="#about">ABOUT</a>
          </div>
          <div className="nav-item">
            <a href="#projects">PROJECTS</a>
          </div>
          <div className="nav-item">
            <a href="#skills">SKILLS</a>
          </div>
          <div className="nav-item">
            <a href="#footer">CONTACT</a>
          </div>
        </div>
        <div className="progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
      </div>
    );
  }
}

export default Header;
