import React from 'react';
import './ContentCards.css';

const portfolioItems = [
  {
    id: 1,
    category: 'Direction',
    title: 'Short Film Direction',
    description: 'Showcasing my vision as a director.',
    date: 'Recent',
    link: 'https://www.facebook.com/share/v/1DTmqr4FFq/'
  },
  {
    id: 2,
    category: 'Writing',
    title: 'Journalism & Publications',
    description: 'Feature articles and creative writing.',
    date: 'Recent'
  },
  {
    id: 3,
    category: 'PR & Media',
    title: 'Mass Communication Projects',
    description: 'Public Relations and media campaigns.',
    date: 'Recent'
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
                <a 
                  href={item.link || "#"} 
                  className="card-link"
                  target={item.link ? "_blank" : "_self"}
                  rel={item.link ? "noopener noreferrer" : ""}
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCards;
