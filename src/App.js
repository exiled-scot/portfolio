import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div id="app" className="App">
      <article className="scroller">
        <Header />
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
  );
}

export default App;
