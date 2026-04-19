import { motion } from 'framer-motion';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-glow-blob"></div>
      <div className="container">
        <motion.div 
          className="cta-container hover-target"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h2 className="cta-heading">
              Ready to <span className="gold-text">Transform</span> Your Life?
            </h2>
            <p className="cta-sub">
              Join thousands of students who have discovered purpose, focus, and joy through our structured programs.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary hover-target">Register Now</button>
              <button className="btn-secondary hover-target">Explore Courses</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
