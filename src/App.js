import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Travels from './components/Travels';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div id="app" className="App">
      <article class="scroller">
        <Header />
        <section>
          <Body />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Travels />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Skills />
        </section>
          <Footer />
      </article>
    </div>
  );
}

export default App;
