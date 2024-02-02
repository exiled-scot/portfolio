import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Travel from './components/Travel';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    // Calculate the height of the About section
    const aboutSection = document.querySelector('.about-section');
    const aboutSectionHeight = aboutSection ? aboutSection.offsetHeight : 0;

    // Calculate the adjusted height of the page
    const adjustedHeight = document.documentElement.scrollHeight - aboutSectionHeight;

    // Store the adjusted height in the component's state
    this.setState({ adjustedHeight });

    // Add event listener for scroll event
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // Remove the event listener when the component is unmounted
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    // Get the adjusted height from the component's state
    const { adjustedHeight } = this.state;

    // Calculate the position of the About section
    const aboutSection = document.querySelector('.about-section');
    const aboutSectionTop = aboutSection ? aboutSection.offsetTop : 0;

    // Calculate the scroll position relative to the adjusted height
    const scrollPosition = window.pageYOffset - aboutSectionTop;

    // Calculate the maximum scroll position (adjusted for the adjusted height)
    const maxScrollPosition = adjustedHeight - window.innerHeight;

    // Calculate the opacity based on the scroll position
    let opacity = scrollPosition / maxScrollPosition;

    // Calculate the grayscale value based on the scroll position
    let grayscale = 100;

    // Gradually decrease the grayscale value beyond the About section
    if (opacity > 1) {
      grayscale = 0;
    } else if (opacity > 0.6) {
      grayscale = 100 - (opacity - 0.6) / 0.4 * 100;
    }

    // Ensure opacity doesn't exceed 1
    opacity = opacity > 1 ? 1 : opacity;

    // Apply the opacity and grayscale to the header element
    const header = document.querySelector('.header-bg');
    header.style.opacity = opacity;
    header.style.filter = `grayscale(${grayscale}%)`;
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
            <section className="about-section">
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
