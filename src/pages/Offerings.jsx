import React from 'react';
import { Database, BarChart2, TrendingUp, Zap, Lightbulb } from 'lucide-react';

const Offerings = () => {
  const offerings = [
    {
      title: 'tatva.ingest',
      icon: <Database size={56} />,
      description: 'tatva.ingest is our AI-native data integration layer that connects with ERP systems, IoT devices, utility data, and manual uploads. It automates data collection, cleaning, and structuring in real time, creating a reliable foundation for emissions tracking while ensuring compliance-readiness with frameworks such as GHG Protocol, CCTS, and CBAM.'
    },
    {
      title: 'tatva.measure',
      icon: <BarChart2 size={56} />,
      description: 'tatva.measure converts operational data into accurate carbon emissions across Scope 1, 2, and 3, aligned with GHG Protocol standards. It applies intelligent emission factors and validation checks to ensure consistency and audit-readiness, enabling businesses to track their carbon footprint in real time while meeting regulatory and reporting requirements.'
    },
    {
      title: 'tatva.forecast',
      icon: <TrendingUp size={56} />,
      description: 'tatva.forecast uses AI-driven models to project future emissions based on historical data, operational trends, and external factors. It supports both short-term operational planning and long-term decarbonisation strategies, helping organisations anticipate risks, plan for compliance, and make informed decisions under evolving regulations like CCTS and CBAM.'
    },
    {
      title: 'tatva.gridprice',
      icon: <Zap size={56} />,
      description: 'tatva.gridprice is an AI-native tool that predicts optimal electricity trading prices across GDAM, DAM, RTM, and other power markets. It leverages demand patterns, weather data, historical prices, and renewable generation trends to deliver real-time price forecasts and bid strategy recommendations. Designed for open access consumers, it enables cost optimisation by helping businesses make smarter, data-driven procurement decisions.'
    },
    {
      title: 'tatva.recommend',
      icon: <Lightbulb size={56} />,
      description: 'tatva.recommend delivers actionable insights to reduce emissions while optimising cost and operational efficiency. Using AI-driven analysis, it identifies high-impact reduction opportunities, prioritises interventions, and aligns them with compliance and sustainability goals, enabling organisations to move from measurement to meaningful climate action.'
    }
  ];

  return (
    <main
      className="animate-fade-in"
      style={{ background: "var(--bg-secondary)", paddingBottom: "6rem" }}
    >
      <div className="container" style={{ paddingTop: "4rem" }}>
        <h1
          className="hero-title offering-title"
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          Our <span>Offerings</span>
        </h1>

        <div className="offerings-list">
          {offerings.map((offering, idx) => (
            <div
              key={idx}
              className={`offering-card ${idx % 2 !== 0 ? "reverse" : ""}`}
            >
              <div className="offering-icon-wrapper">{offering.icon}</div>
              <div className="offering-content">
                <h2 className="offering-title">{offering.title}</h2>
                <p className="offering-desc">{offering.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Book Demo Section */}
      <section id="demo" className="demo-section">
        <div className="demo-container">
          {/* LEFT CONTENT */}
          <div className="demo-left">
            <h2 className="demo-title">
              Request a <span>demo</span>
            </h2>

            <p className="demo-desc">
              Discover how CarbonTatva AI helps you measure, monitor, and
              forecast emissions with precision. Our platform integrates
              seamlessly with your systems to deliver actionable climate
              insights.
            </p>

            <p className="demo-desc">
              From <strong>tatva.ingest</strong> to{" "}
              <strong>tatva.recommend</strong>, we provide end-to-end
              intelligence to ensure compliance, optimise costs, and accelerate
              your journey to net-zero.
            </p>

            <p className="demo-contact">
              Or reach us at <span>support@carbontatva.com</span>
            </p>
          </div>

          {/* RIGHT FORM */}
          <form className="demo-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Contact No.</label>
                <input name="phone" type="tel" className="form-input" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Organization Name</label>
              <input name="company" type="text" className="form-input" />
            </div>

            <div className="form-group">
              <label className="form-label">Interested In</label>
              <select name="interest" className="form-input">
                <option>tatva.ingest</option>
                <option>tatva.measure</option>
                <option>tatva.forecast</option>
                <option>tatva.gridprice</option>
                <option>tatva.recommend</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Tell us about your requirements..."
              />
            </div>

            <button type="submit" className="btn btn-primary demo-btn">
              Request Demo →
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Offerings;
