import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ContentCards from './components/ContentCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ContentCards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
