import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Landing from './components/Landing';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const header = document.querySelector('.header-bg');
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollHeight = documentHeight - windowHeight;
    const opacity = window.scrollY / scrollHeight;
    header.style.opacity = opacity > 1 ? 1 : opacity;
  };

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
              <Footer />
            </section>
          </article>
        </div>
      </>
    );
  }
}

export default App;
