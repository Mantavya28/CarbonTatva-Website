import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("developers");

  const interns = {
    developers: [
      { name: "Vibhor Srivastava", img: "/interns/vibhor.jpeg" },
      { name: "Tanmay", img: "/interns/tanmay.jpeg" },
    ],
    founders: [
      { name: "Jane Smith", img: "/interns/jane.jpg" },
      { name: "Alex Kumar", img: "/interns/alex.jpg" },
    ],
  };
  return (
    <main
      className="animate-fade-in"
      style={{ background: "white", paddingBottom: "4rem" }}
    >
      <div className="container">
        {/* Company Section */}
        <section className="about-company-section">
          <div className="about-text-content">
            <h1
              className="hero-title"
              style={{
                textAlign: "left",
                marginBottom: "1.5rem",
                fontSize: "3rem",
              }}
            >
              About the <span>company</span>
            </h1>
            <p
              className="hero-subtitle"
              style={{ textAlign: "left", marginBottom: "1.5rem" }}
            >
              CarbonTatva AI is an AI-native platform that enables businesses to
              measure, monitor, and forecast carbon emissions. Built for India’s
              regulatory landscape, it transforms operational data into
              actionable insights for compliance and decarbonisation.
            </p>
            <p
              className="hero-subtitle"
              style={{ textAlign: "left", marginBottom: "2rem" }}
            >
              Powered by proprietary models, we deliver end-to-end climate
              intelligence to help organisations optimise costs and accelerate
              their path to net-zero.
            </p>
            <p
              className="hero-subtitle"
              style={{
                textAlign: "left",
                fontWeight: "600",
                color: "var(--text-main)",
                fontSize: "1.25rem",
                marginBottom: "0.5rem",
              }}
            >
              We are building AI-powered climate intelligence to measure,
              monitor, and reduce emissions.
            </p>
            <button
              className="btn btn-primary"
              style={{
                marginTop: "0",
                padding: "0.75rem 2rem",
                fontSize: "1.125rem",
              }}
              onClick={() => (window.location.href = "#demo")}
            >
              Request a demo{" "}
              <ArrowRight size={20} style={{ marginLeft: "8px" }} />
            </button>
          </div>
          <div className="about-logo-container">
            <img src="/CarbonTatvaAi_logo.png" alt="CarbonTatva AI" />
          </div>
        </section>

        {/* Founders Section */}
        <section className="founders-section">
          <h2
            className="hero-title"
            style={{ fontSize: "3rem", marginBottom: "1rem" }}
          >
            Our <span>founders</span>
          </h2>
          <div className="founders-container">
            {/* Founder 1 */}
            <div className="founder-card">
              <img
                src="/mantavya.jpg"
                alt="Mantavya Upadhyay"
                className="founder-photo"
              />
              <div className="founder-info">
                <h3 className="founder-name">Mantavya Upadhyay</h3>
                <div className="founder-role">Co-Founder & CEO</div>
                <p className="founder-bio">
                  Leading the vision for CarbonTatva AI to become the premier
                  platform for enterprise climate intelligence and
                  sustainability compliance.
                </p>
              </div>
            </div>

            {/* Founder 2 (Offset and reverse) */}
            {/* <div className="founder-card reverse offset">
              <img
                src="/nikhil.jpg"
                alt="Nikhil Kumar"
                className="founder-photo"
              />
              <div className="founder-info" style={{ textAlign: "left" }}>
                <h3 className="founder-name">Nikhil Kumar</h3>
                <div className="founder-role">Co-Founder & CTO</div>
                <p className="founder-bio">
                  Architecting the proprietary AI models including tatva.ingest
                  and tatva.measure to deliver pinpoint accurate emissions
                  tracking.
                </p>
              </div>
            </div> */}

            {/* Founder 3 */}
            {/* <div className="founder-card">
              <img
                src="/suneet.jpg"
                alt="Suneet Maharana"
                className="founder-photo"
              />
              <div className="founder-info">
                <h3 className="founder-name">Suneet Maharana</h3>
                <div className="founder-role">Co-Founder & COO</div>
                <p className="founder-bio">
                  Driving operational excellence and guiding our clients through
                  the evolving regulatory landscape like CBAM and CCTS.
                </p>
              </div> */}
            {/* </div> */}
          </div>
        </section>
        {/* Interns Section */}
        <section className="interns-section">
          <h2
            className="hero-title"
            style={{ fontSize: "3rem", marginBottom: "1rem" }}
          >
            Our <span>interns</span>
          </h2>

          {/* Tabs */}
          <div className="intern-tabs">
            <button
              className={activeTab === "developers" ? "tab active" : "tab"}
              onClick={() => setActiveTab("developers")}
            >
              Developers
            </button>
            <button
              className={activeTab === "founders" ? "tab active" : "tab"}
              onClick={() => setActiveTab("founders")}
            >
              Founders Office
            </button>
          </div>

          {/* Intern Grid */}
          <div className="interns-grid">
            {interns[activeTab].map((intern, index) => (
              <div key={index} className="intern-card">
                <img src={intern.img} alt={intern.name} />
                <div className="intern-name">{intern.name}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
