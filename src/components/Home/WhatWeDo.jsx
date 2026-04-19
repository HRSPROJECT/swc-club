import { motion } from 'framer-motion';
import './WhatWeDo.css';

const activities = [
  {
    title: 'Weekly Spiritual Sessions',
    desc: 'Engage in profound discussions on the Bhagavad Gita every week, discovering practical wisdom for daily student life. We chant, meditate, and build eternal friendships.',
    img: '/activities/sessions/20250926_165308.jpg',
    reverse: false
  },
  {
    title: 'Comprehensive Courses',
    desc: 'From foundational overviews to deep scriptural study, our structured courses guide you through spiritual philosophy, character building, and leadership.',
    img: '/activities/courses/IMG_20250924_164921633_HDR.jpg',
    reverse: true
  },
  {
    title: '1-on-1 Mentorship',
    desc: 'Navigate the challenges of college life and spiritual practice with personalized guidance from experienced senior practitioners and alumni.',
    img: '/activities/mentorship/IMG_20250926_180817.jpg',
    reverse: false
  }
];

const WhatWeDo = () => {
  return (
    <section className="we-do-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Our Activities</span>
          <h2 className="section-title">What We <span className="gold-text">Do</span></h2>
        </div>

        <div className="activities-container">
          {activities.map((act, i) => (
            <div key={i} className={`activity-row ${act.reverse ? 'reverse' : ''}`}>
              <motion.div 
                className="activity-img-wrapper"
                initial={{ opacity: 0, x: act.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <img src={act.img} alt={act.title} className="activity-img" />
              </motion.div>
              
              <motion.div 
                className="activity-content"
                initial={{ opacity: 0, x: act.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="activity-title">{act.title}</h3>
                <p className="activity-desc">{act.desc}</p>
                <button className="btn-secondary hover-target">Learn More</button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
