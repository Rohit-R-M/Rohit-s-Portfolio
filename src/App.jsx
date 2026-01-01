import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GalaxyBackground from './components/MovingBackground';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="App">
      <GalaxyBackground theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />

        {/* Unified Background Section for Core Content */}
        <div style={{ position: 'relative' }}>
          {/* Shared large atmosphere glow for the middle sections */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: '80%',
            background: theme === 'dark'
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(37, 99, 235, 0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: -1
          }} />

          <Education />
          <Skills />
          <Projects />
        </div>

        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
