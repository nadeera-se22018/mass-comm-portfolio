import React from 'react';
import './Hero.css';
import hasharaImg from '../assets/hashara-profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="subtitle">Hello, I'm</p>
          <h1 className="title">Hashara<br/>Sandamini</h1>
          <h2 className="profession">Creative Communicator | Voice Artist | <span className="highlight">Director</span></h2>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-image glass" style={{ padding: '0', border: '5px solid rgba(255,255,255,0.3)', borderRadius: '20px' }}>
            <img 
              src={hasharaImg} 
              alt="Hashara Sandamini - Profile" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '400px', display: 'block', borderRadius: '15px' }} 
            />
            <div className="floating-badge badge-1 glass">
              <span>🎙️ Voice Artist</span>
            </div>
            <div className="floating-badge badge-2 glass">
              <span>🎬 Director</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
