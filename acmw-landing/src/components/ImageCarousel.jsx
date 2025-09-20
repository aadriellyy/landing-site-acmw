import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';
import image1 from '../assets/carrossel1.png';
import image2 from '../assets/carrossel2.png';
import image3 from '../assets/carrossel3.png';
import image4 from '../assets/carrossel4.png';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array de imagens - substitua com suas próprias imagens
  const images = [
    image2,
    image1,
    image3,
    image4
  ];

  // Avança para o próximo slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Volta para o slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Vai para um slide específico
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Configura a transição automática
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div 
        className="carousel-slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="carousel-slide"
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      
      {/* Botões de navegação */}
      <button className="carousel-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        &#10095;
      </button>
      
      {/* Indicadores */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;