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

  handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '../assets/ScottStevenson-cv.pdf';
    downloadLink.download = 'ScottStevenson-cv.pdf';
    downloadLink.click();
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
    const { scrollPercentage, isHovered } = this.state;

    return (
      <div className="header">
        <div
          className={`header-logo ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
          style={{color:'white'}}
        >
          <button
            className={`header-name ${isHovered ? 'fade-in' : ''}`}
            onClick={this.handleDownload}
          >
            {isHovered ? 'RESUMÉ' : 'SCOTT STEVENSON'}
          </button>
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
