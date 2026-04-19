import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Ananya Sharma',
    role: 'Student',
    text: 'SWC completely transformed my first year at college. The value-based approach brought me clarity amidst academic pressure, and the retreats were life-changing.'
  },
  {
    name: 'Prof. Rajesh Kumar',
    role: 'Teacher',
    text: 'I have strictly observed a positive shift in the students involved in the club. They display better focus, resilience, and compassion towards their peers.'
  },
  {
    name: 'Rohan Verma',
    role: 'Student',
    text: 'The Bhagavad Gita study sessions gave me the framework to handle failures and successes equally. Im genuinely grateful for this wonderful community.'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Community Voices</span>
          <h2 className="section-title">What They <span className="gold-text">Say</span></h2>
        </div>

        <div className="testimonial-slider">
          <button className="slider-btn prev hover-target" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="testimonial-window">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="testimonial-card hover-target"
              >
                <div className="quote-icon">
                  <Quote size={40} color="var(--saffron)" opacity={0.3} />
                </div>
                <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
                <div className="testimonial-author">
                  <h4>{testimonials[currentIndex].name}</h4>
                  <span className="author-role">{testimonials[currentIndex].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="slider-btn next hover-target" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="slider-dots">
          {testimonials.map((_, i) => (
            <div 
              key={i} 
              className={`slider-dot ${i === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
