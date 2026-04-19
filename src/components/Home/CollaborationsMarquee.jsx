import './CollaborationsMarquee.css';

const institutions = [
  'IIT MADRAS', 'NIT TRICHY', 'BVRV COLLEGE', 'IIT BOMBAY', 'IIT KANPUR', 
  'BITS PILANI', 'NIT WARANGAL', 'IIT DELHI'
];

const CollaborationsMarquee = () => {
  return (
    <section className="marquee-section">
      <div className="container">
        <h3 className="marquee-title text-center">In Proud Collaboration With</h3>
      </div>
      <div className="marquee-wrapper hover-target">
        <div className="marquee-track">
          {/* Double the content for seamless infinite loop */}
          {[...institutions, ...institutions].map((inst, i) => (
            <div key={i} className="marquee-item">
              <span className="inst-name">{inst}</span>
              <span className="dot">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationsMarquee;
