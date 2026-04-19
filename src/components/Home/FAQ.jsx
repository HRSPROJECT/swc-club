import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: 'What is the Student Welfare Club (SWC)?',
    answer: 'SWC is a community dedicated to helping engineering students achieve holistic growth. We draw inspiration from the Bhagavad Gita to build character, resilience, and meaningful lives alongside academic pursuits.',
  },
  {
    question: 'Who is eligible to join the club?',
    answer: 'The club is primarily focused on 1st-year engineering students to help them start their college journey right, but students from all years and disciplines are welcome to participate in our open sessions and retreats.',
  },
  {
    question: 'Are the courses free or paid?',
    answer: 'Most of our foundational courses and weekly sessions are completely free. Special retreats or deep-focus workshops may have a nominal charge to cover logistics and materials, but financial assistance is always available.',
  },
  {
    question: 'Is it mandatory to attend every session?',
    answer: 'While regular attendance ensures you get the full benefit of our structured courses, we understand college schedules can be demanding. We encourage coming as often as you can to maintain the connection with the community.',
  },
  {
    question: 'Do I get a certification for completing courses?',
    answer: 'Yes! Upon successful completion of our structured courses (like the foundational Gita series), you will receive a certificate recognizing your commitment to value-based learning and character development.',
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Got Questions?</span>
          <h2 className="section-title">Frequently Asked <span className="gold-text">Questions</span></h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`faq-item hover-target ${openIndex === i ? 'open' : ''}`}
            >
              <button 
                className="faq-question hover-target"
                onClick={() => toggleFaq(i)}
              >
                {faq.question}
                <span className="faq-icon">
                  {openIndex === i ? <Minus color="var(--saffron)" /> : <Plus color="var(--text-main)" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-answer-wrapper"
                  >
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
