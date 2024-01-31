import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Travel from './components/Travel';
import Landing from './components/Landing';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const header = document.querySelector('.header-bg');
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollHeight = documentHeight - windowHeight;
    let opacity = window.scrollY / scrollHeight;
    let grayscale = 100;

    // Decrement grayscale value after scrolling past 60% of the screen
    if (opacity > 0.6) {
      grayscale = 100 - (opacity - 0.6) / 0.4 * 100;
    }

    header.style.filter = `grayscale(${grayscale}%)`;

    // Ensure opacity doesn't exceed 1
    opacity = opacity > 1 ? 1 : opacity;
    header.style.opacity = opacity;
  }

  componentDidMount() {
    // Call handleScroll once after the component has mounted
    this.handleScroll();

    // Add event listener for scroll event
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <>
        <div className="header-bg" />
        <div style={{ position: 'relative', zIndex: 0 }}>
          <Header />
          <article>
            <section>
              <Body />
            </section>
            <section>
              <About />
            </section>
            <section>
              <Projects />
            </section>
            <section>
              <Skills />
            </section>
            <section>
            <Travel />
            </section>
            <section>
              <Footer />
            </section>
          </article>
        </div>
      </>
    );
  }
}

export default App;
