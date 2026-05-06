import React from 'react';
import './About.css';
import aboutImg from '../assets/abouthash.png';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content glass">
          <div className="about-grid">
            <div className="about-image-container">
              <div className="image-blob-bg"></div>
              <img src={aboutImg} alt="Hashara Sandamini" className="about-image" />
            </div>
            <div className="about-text-container">
              <h2 className="section-title" style={{ textAlign: 'left' }}>About Me</h2>
              <p className="about-text" style={{ textAlign: 'left', margin: '0' }}>
                <span className="greeting">Hello!</span> I'm Hashara Sandamini, a passionate <span className="highlight-text">Mass Communication</span> undergraduate at the <span className="highlight-text">University of Kelaniya</span>. Hailing from <span className="highlight-text">Matale</span> and a proud alumna of <span className="highlight-text">Sujatha Girls' School</span>, I have always been deeply connected to the arts. With a captivating voice, a radiant smile, and a highly energetic personality, I thrive in creative environments. My goal is to connect and inspire through dynamic storytelling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
