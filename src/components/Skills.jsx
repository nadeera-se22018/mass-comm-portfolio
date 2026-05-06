import React from 'react';
import './Skills.css';

const skillsData = [
  { id: 1, name: 'Announcing', icon: '🎤' },
  { id: 2, name: 'Dubbing', icon: '🎧' },
  { id: 3, name: 'Creative Writing', icon: '✍️' },
  { id: 4, name: 'Photography', icon: '📸' },
  { id: 5, name: 'Strategic Communication', icon: '📈' },
  { id: 6, name: 'Dancing', icon: '💃' }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Expertise</h2>
        </div>
        <div className="skills-grid">
          {skillsData.map(skill => (
            <div key={skill.id} className="skill-card glass">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
