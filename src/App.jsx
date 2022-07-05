import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SnackbarProvider from 'react-simple-snackbar'
import './style.css';

function App() {
  return (
    <SnackbarProvider>
      <div className="app" id='app'>
      <div className="top-container"><div className="gradient-top"></div></div>
      <Navbar />
      <div className="glassmorphism-bg">
        <div id='top'></div>
        <div className="main">
          <About />
          <Projects />
          <Blog />
          <Contact />
        </div>
      </div>
    </div>
    </SnackbarProvider>
  );
}

export default App;
