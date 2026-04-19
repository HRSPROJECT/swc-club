import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroCarousel.css';

const images = [
  {
    src: '/assets/images/IMG_20250616_120442341_HDR.jpg',
    heading: 'Discover The Ancient Wisdom Of Bhagavad Gita',
    sub: 'Join a community walking the path of dharma, guided by Lord Krishna.',
  },
  {
    src: '/assets/images/IMG_6388.jpg',
    heading: 'Immersive Vedic Retreats',
    sub: 'Experience holistic growth in the sacred presence of spiritual environments.',
  },
  {
    src: '/assets/images/IMG_6706.jpg',
    heading: 'Meaningful Value-Based Learning',
    sub: 'Transform your perspective through interactive sessions and mindful community building.',
  }
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // Auto-slide every 6s
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="hero-carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="carousel-slide"
          style={{ backgroundImage: `url(${images[currentIndex].src})` }}
        >
          <div className="carousel-overlay">
            <div className="hero-content">
              <motion.div 
                className="hero-badge hover-target"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="badge-dot"></span>DHARMA. WISDOM. KARMA.
              </motion.div>
              
              <motion.h1 
                className="hero-heading"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {images[currentIndex].heading}
              </motion.h1>
              
              <motion.p 
                className="hero-sub"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {images[currentIndex].sub}
              </motion.p>
              
              <motion.div 
                className="hero-ctas"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <button className="btn-primary hover-target">Join Now &rarr;</button>
                <button className="btn-secondary hover-target">Explore Courses</button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button className="carousel-control prev hover-target" onClick={handlePrev}>
        <ChevronLeft size={32} />
      </button>
      <button className="carousel-control next hover-target" onClick={handleNext}>
        <ChevronRight size={32} />
      </button>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
