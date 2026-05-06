import React from 'react';
import './ContentCards.css';

const portfolioItems = [
  {
    id: 1,
    category: 'Article',
    title: 'The Digital Shift: Modern Journalism',
    description: 'An in-depth analysis of how social media platforms are reshaping news consumption habits among Gen Z.',
    date: 'Oct 2025'
  },
  {
    id: 2,
    category: 'Video',
    title: 'Voices of Campus: Student Doc',
    description: 'A short documentary exploring the diverse backgrounds and stories of our university community.',
    date: 'Dec 2025'
  },
  {
    id: 3,
    category: 'Campaign',
    title: 'Eco-Awareness Social Strategy',
    description: 'A comprehensive social media strategy designed to promote sustainability initiatives on campus.',
    date: 'Feb 2026'
  }
];

const ContentCards = () => {
  return (
    <section id="work" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Selected Works</h2>
          <p className="section-subtitle">A collection of my recent projects in writing, media, and strategy.</p>
        </div>
        
        <div className="cards-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className="card glass">
              <div className="card-category">{item.category}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <div className="card-footer">
                <span className="card-date">{item.date}</span>
                <a href="#" className="card-link">Read More &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCards;
