import React from 'react';
import { ExternalLink, Send } from 'lucide-react';

const RD = () => {
  return (
    <main className="animate-fade-in" style={{ background: 'var(--bg-secondary)', paddingBottom: '6rem' }}>
      <div className="container" style={{ paddingTop: '4rem' }}>
        
        {/* Intro Section */}
        <section className="rd-intro">
          <h1 className="hero-title offering-title" style={{ marginBottom: '1.5rem' }}>Research & <span>Development</span></h1>
          <p className="hero-subtitle" style={{ margin: '0 auto', color: 'var(--text-main)', fontSize: '1.15rem', lineHeight: '1.8' }}>
            Our work at CarbonTatva.AI is grounded in rigorous research at the intersection of climate, energy, and AI. As founders, we have actively contributed to advancing methodologies in energy demand forecasting and climate impact analysis. This research underpins our product capabilities, enabling us to build accurate, scalable, and regulation-ready solutions for real-world emissions measurement, forecasting, and decision-making.
          </p>
        </section>

        {/* Papers Section */}
        <section className="papers-grid">
          {/* Paper 1 */}
          <div className="paper-card">
            <h2 className="paper-title">Climate Change: Impact of Global Warming on India’s Electricity Consumption</h2>
            <div className="paper-authors">By Mantavya Upadhyay et al.</div>
            <p className="paper-summary">
              This study analyses how rising temperatures influence electricity demand across India, using state-level consumption and weather data. It highlights how temperature variations significantly impact demand patterns, with big regional and socio-economic differences. The findings provide a foundation for understanding climate-driven demand shifts, directly informing how we model emissions sensitivity and forecast future energy needs.
            </p>
            <button className="btn btn-primary" onClick={() => alert('Paper link coming soon!')}>
              Read Paper <ExternalLink size={18} style={{ marginLeft: '8px' }} />
            </button>
          </div>

          {/* Paper 2 */}
          <div className="paper-card">
            <h2 className="paper-title">Energy Transition Modelling: Short-Term Electricity Demand Forecasting Using Seq2Seq Encoder–Decoder Model</h2>
            <div className="paper-authors">By Mantavya Upadhyay et al.</div>
            <p className="paper-summary">
              This paper introduces a Seq2Seq LSTM-based approach for short-term electricity demand forecasting that captures complex temporal and weather-driven patterns. It demonstrates improved forecasting performance compared to conventional methods, offering a scalable framework for energy prediction. This work informs our AI-native forecasting systems, enabling more accurate emissions projections and better planning under dynamic operational conditions.
            </p>
            <a href="https://link.springer.com/chapter/10.1007/978-981-96-7295-0_10" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Read Paper <ExternalLink size={18} style={{ marginLeft: '8px' }} />
            </a>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="collab-section">
          <div className="collab-content">
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '1.5rem', fontWeight: '800' }}>Request for <span>collaboration</span></h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              We are always looking to collaborate with academic institutions, research labs, and industry partners working at the intersection of AI and climate. Whether it is joint research, pilot projects, data partnerships, or grant initiatives, we aim to build solutions that drive real-world impact.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
              Reach out to us at <a href="mailto:support@carbontatva.co.in" className="collab-email">support@carbontatva.com</a> or fill out the following form to explore collaboration opportunities.
            </p>
          </div>
          
          <div className="collab-form-container">
            <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted successfully!'); }}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-input" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-input" placeholder="Doe" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Contact No.</label>
                  <input type="tel" className="form-input" placeholder="+91 98765 43210" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Organization Name</label>
                <input type="text" className="form-input" placeholder="University or Company" required />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="How would you like to collaborate?" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', marginTop: '0.5rem' }}>
                Submit Request <Send size={18} style={{ marginLeft: '8px' }} />
              </button>
            </form>
          </div>
        </section>

      </div>
    </main>
  );
};

export default RD;
