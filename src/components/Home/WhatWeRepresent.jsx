import { motion } from 'framer-motion';
import { BookOpen, Target, Sparkles, Heart } from 'lucide-react';
import './WhatWeRepresent.css';

const values = [
  {
    icon: <BookOpen size={36} color="var(--saffron)" />,
    title: 'Value-Based Learning',
    desc: 'Connecting ancient wisdom of the Bhagavad Gita to modern challenges for balanced personal development.'
  },
  {
    icon: <Target size={36} color="var(--saffron)" />,
    title: 'Skill Development',
    desc: 'Equipping members with practical skills in communication, leadership, and analytical thinking.'
  },
  {
    icon: <Sparkles size={36} color="var(--saffron)" />,
    title: 'Experiential Learning',
    desc: 'Participating in retreats, deep meditations, and community service projects to live the teachings.'
  },
  {
    icon: <Heart size={36} color="var(--saffron)" />,
    title: 'Holistic Growth',
    desc: 'Nurturing the mind, body, and soul through a supportive campus community of seekers.'
  }
];

const WhatWeRepresent = () => {
  return (
    <section className="represent-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Core Principles</span>
          <h2 className="section-title">What We <span className="gold-text">Represent</span></h2>
          <p className="section-sub">Guided by dharma, we aim to transform student lives.</p>
        </div>
        
        <div className="values-grid">
          {values.map((val, i) => (
            <motion.div 
              key={i} 
              className="value-card hover-target"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="value-icon">{val.icon}</div>
              <h3 className="value-title">{val.title}</h3>
              <p className="value-desc">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeRepresent;
