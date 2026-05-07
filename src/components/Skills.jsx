import React, { useState, useEffect } from 'react';
import './Skills.css';

const skillsData = [
  { 
    id: 1, 
    name: 'Announcing', 
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop',
    description: 'Commanding the stage with a strong, engaging presence for live events and broadcasts.'
  },
  { 
    id: 2, 
    name: 'Dubbing', 
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
    description: 'Bringing characters to life with dynamic voice acting and precise lip-syncing.'
  },
  { 
    id: 3, 
    name: 'Creative Writing', 
    image: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=800&auto=format&fit=crop',
    description: 'Crafting compelling narratives, articles, and scripts that captivate audiences.'
  },
  { 
    id: 4, 
    name: 'Photography', 
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
    description: 'Capturing moments and stories through a creative and professional lens.'
  },
  { 
    id: 5, 
    name: 'Strategic Communication', 
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
    description: 'Developing effective media campaigns and PR strategies to build brand identity.'
  },
  { 
    id: 6, 
    name: 'Dancing', 
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop',
    description: 'Expressing emotion and rhythm through energetic and graceful performances.'
  }
];

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(2);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(1);
      } else {
        setItemsToShow(2);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, skillsData.length - itemsToShow);

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Expertise</h2>
        </div>
        
        <div 
          className="carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="skills-track" 
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {skillsData.map(skill => (
              <div key={skill.id} className="skill-card-wrapper">
                <div className="skill-card glass">
                  <div className="skill-image-container">
                    <img src={skill.image} alt={skill.name} className="skill-image" loading="lazy" />
                  </div>
                  <div className="skill-content">
                    <h3 className="skill-name">{skill.name}</h3>
                    <p className="skill-description">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="carousel-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button 
              key={idx} 
              className={`dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
