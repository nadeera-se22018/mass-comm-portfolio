import React from 'react';
import './Gallery.css';
import img1 from '../assets/HGalleryimage1.jpeg';
import img2 from '../assets/HGalleryimage2.jpg';
import img3 from '../assets/HGalleryimage3.jpg';
import img4 from '../assets/HGalleryimage4.jpg';
import sriyanthaImg from '../assets/Mr. Shriyantha.jpeg';
import wasanthaImg from '../assets/Mr. Wasantha.jpeg';
import rasadareeImg from '../assets/Ms. Rasadaree.jpeg';

const galleryData = [
  {
    id: 1,
    image: img1,
    text: "Coordinator - Alambana 2026, All-Island Photography Competition and Exhibition, University of Kelaniya"
  },
  {
    id: 2,
    image: img2,
    text: "Dancer - Sanjanani 2026, Department of Mass Communication, University of Kelaniya"
  },
  {
    id: 3,
    image: img3,
    text: "Student - Lanka Television and Radio Academy, Dehiwala"
  },
  {
    id: 4,
    image: img4,
    text: "Undergraduate - BA honors in Mass Communication, University of Kelaniya"
  },
  {
    id: 5,
    image: sriyanthaImg,
    text: "Learning from a legend: Mr. Sriyantha Mendis at LTRA, Dehiwala."
  },
  {
    id: 6,
    image: wasanthaImg,
    text: "Media insights from the best: Veteran journalist Mr. Wasantha Rohana at LTRA, Dehiwala."
  },
  {
    id: 7,
    image: rasadareeImg,
    text: "Mastering the art of voice with veteran dubbing artist Mrs. Rasadari Peiris at LTRA, Dehiwala."
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">A glimpse into my academic, professional, and creative journey.</p>
        </div>
        
        <div className="gallery-carousel-container">
          <div className="gallery-carousel-track">
            {galleryData.map((item) => (
              <div key={`original-${item.id}`} className="gallery-item glass">
                <div className="gallery-image-wrapper">
                  <img src={item.image} alt="Gallery item" className="gallery-img" />
                </div>
                <div className="gallery-text-wrapper">
                  <p className="gallery-text">{item.text}</p>
                </div>
              </div>
            ))}
            {galleryData.map((item) => (
              <div key={`dup-${item.id}`} className="gallery-item glass">
                <div className="gallery-image-wrapper">
                  <img src={item.image} alt="Gallery item" className="gallery-img" />
                </div>
                <div className="gallery-text-wrapper">
                  <p className="gallery-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
