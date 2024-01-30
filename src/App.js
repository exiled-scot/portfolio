import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Landing from './components/Landing';
import './App.css';

const App = () => {
  return (
    <div id="app" className="App">
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }}>
        <Landing />
      </div>
      <div style={{ position: 'relative', zIndex: 0 }}>
        <Header />
        <article className="scroller">
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
    </div>
  );
}

export default App;

