import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Travels from './components/Travels';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';
import PCMonitor from './components/PCMonitor';

const App = () => {
  return (
    <div id="app" className="App">
      <Header />
      <Body />
      <About />
      <Travels />
      <PCMonitor />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
