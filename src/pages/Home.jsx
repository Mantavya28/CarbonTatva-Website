import React from 'react';
import { ArrowRight, Database, BarChart2, TrendingUp, Lightbulb, AlertCircle, Scale, Target, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main
      className="animate-fade-in"
      style={{ background: "white", paddingBottom: "0" }}
    >
      {/* 1. Main Hero Section */}
      <section
        className="hero-section"
        style={{
          minHeight: "80vh",
          padding: "6rem 1.5rem",
          background:
            "radial-gradient(circle at top right, rgba(16, 185, 129, 0.05) 0%, var(--bg-color) 100%)",
        }}
      >
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column", gap: "4rem" }}
        >
          <div
            className="hero-content"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            <h1
              className="hero-title"
              style={{
                fontSize: "4rem",
                marginBottom: "1.5rem",
                lineHeight: "1.1",
              }}
            >
              AI-native carbon intelligence for <span>modern businesses</span>
            </h1>
            <p
              className="hero-subtitle"
              style={{
                fontSize: "1.35rem",
                marginBottom: "3rem",
                maxWidth: "800px",
                margin: "0 auto 3rem",
              }}
            >
              CarbonTatva AI helps enterprises and SMEs measure, monitor,
              forecast, and reduce emissions through an AI-powered layer that
              works on top of existing systems.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link to="/demo" className="btn btn-primary" style={{ padding: "1rem 3rem", fontSize: "1.25rem" }}>
                <LogIn size={20} style={{ marginRight: "10px" }} />
                Book a demo
              </Link>
            </div>
          </div>

          {/* Visual direction: Clean product UI showing connected flow */}
          <div className="hero-visual-flow">
            <div className="flow-card">
              <div className="flow-icon">
                <Database size={28} />
              </div>
              <div className="flow-title">Data Ingestion</div>
              <div className="flow-sub">ERP, IoT, Utility</div>
            </div>
            <div className="flow-connector"></div>
            <div className="flow-card">
              <div className="flow-icon">
                <BarChart2 size={28} />
              </div>
              <div className="flow-title">Measurement</div>
              <div className="flow-sub">Scope 1, 2, 3</div>
            </div>
            <div className="flow-connector"></div>
            <div className="flow-card">
              <div className="flow-icon">
                <TrendingUp size={28} />
              </div>
              <div className="flow-title">Forecasting</div>
              <div className="flow-sub">Predictive models</div>
            </div>
            <div className="flow-connector"></div>
            <div className="flow-card highlight">
              <div className="flow-icon">
                <Lightbulb size={28} />
              </div>
              <div className="flow-title">Recommendations</div>
              <div className="flow-sub">Actionable insights</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem & Solution Section */}
      <section
        className="problems-section"
        style={{ background: "var(--bg-secondary)", padding: "6rem 0 8rem" }}
      >
        <div className="container" style={{ position: "relative" }}>
          
          {/* Section Header */}
          <div style={{ textAlign: "center", maxWidth: "100%", margin: "0 auto 4rem" }}>
            <h2 className="hero-title" style={{ fontSize: "2.5rem", margin: "0 auto 2.5rem", maxWidth: "1200px" }}>
              Carbon management is still too <span>manual</span>, too{" "}
              <span>fragmented</span>, and too <span>complex</span>
            </h2>
            <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
              But it doesn't have to be. CarbonTatva AI transforms overwhelming operational data directly into actionable climate intelligence.
            </p>
          </div>

          <div className="problems-grid" style={{ marginBottom: "5rem" }}>
            {/* Pain point 1 */}
            <div className="problem-card">
              <div className="problem-icon">
                <Database size={32} />
              </div>
              <p>
                Businesses struggle with fragmented data spread across ERP
                systems, utility bills, spreadsheets, and operational records.
              </p>
            </div>
            {/* Pain point 2 */}
            <div className="problem-card">
              <div className="problem-icon">
                <AlertCircle size={32} />
              </div>
              <p>
                Carbon tracking is often manual and time-consuming, making it
                difficult to maintain accuracy, consistency, and real-time
                visibility.
              </p>
            </div>
            {/* Pain point 3 */}
            <div className="problem-card">
              <div className="problem-icon">
                <Scale size={32} />
              </div>
              <p>
                Regulatory requirements such as CBAM and CCTS add another layer
                of complexity, increasing the need for compliance-ready
                emissions intelligence.
              </p>
            </div>
            {/* Pain point 4 */}
            <div className="problem-card">
              <div className="problem-icon">
                <Target size={32} />
              </div>
              <p>
                Emerging mechanisms like CCTS are turning emissions into a
                direct cost factor, making carbon efficiency a critical driver
                of competitiveness and margin protection.
              </p>
            </div>
          </div>

          <div
            className="solution-block"
            style={{
              background: "white",
              padding: "4rem 2.5rem",
              borderRadius: "24px",
              boxShadow: "var(--shadow-md)",
              border: "1px solid var(--border-light)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem"
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "0.5rem 1rem",
                background: "rgba(16, 185, 129, 0.1)",
                color: "var(--primary-green-dark)",
                borderRadius: "9999px",
                fontWeight: "600",
              }}
            >
              The CarbonTatva Advantage
            </div>
            <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--text-main)" }}>
              Transforming operational data into actionable insights
            </h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "950px", lineHeight: "1.8" }}>
              CarbonTatva AI is an AI-native climate intelligence layer that sits
              on top of your existing systems and turns operational data into
              actionable insights. It helps businesses automate data integration,
              accurately calculate emissions, forecast future impacts, and
              identify reduction opportunities, all while supporting compliance
              readiness and smarter decision-making.
            </p>
            <Link
              to="/offerings"
              className="btn btn-primary"
              style={{ padding: "1rem 3rem", fontSize: "1.15rem", marginTop: "1rem" }}
            >
              Explore Features <ArrowRight size={20} style={{ marginLeft: "10px" }} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
