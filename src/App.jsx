import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentCards from './components/ContentCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <ContentCards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
