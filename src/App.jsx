import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Terminal from './components/Terminal';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Intro />
      <Terminal />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
