import React from 'react';
import './Hero.css';
import hasharaImg from '../assets/hashara-profile2.jpg';

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
          <div className="hero-image modern-profile-wrapper">
            <img 
              src={hasharaImg} 
              alt="Hashara Sandamini - Profile" 
              className="modern-profile-img"
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
