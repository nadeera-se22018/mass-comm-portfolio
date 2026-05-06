import React from 'react';
import './Hero.css';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="subtitle">Hello, I'm</p>
          <h1 className="title">Elena<br/>Montgomery</h1>
          <h2 className="profession">Mass Communication <span className="highlight">Undergraduate</span></h2>
          <p className="description">
            Passionate about storytelling, media strategy, and digital journalism. 
            I craft compelling narratives that resonate with modern audiences.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-image glass">
            <img src={profileImg} alt="Elena Montgomery - Mass Communication" />
            <div className="floating-badge badge-1 glass">
              <span>✍️ Journalism</span>
            </div>
            <div className="floating-badge badge-2 glass">
              <span>🎙️ Broadcasting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
