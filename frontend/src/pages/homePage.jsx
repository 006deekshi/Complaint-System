import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router";
import { HeroIllustration } from "../components/illustrations";

function HomePage() {
  return (
    <div>
      <Navbar />

      {/* ── Hero split ── */}
      <div className="home-container">
        <div className="hero-split">
          <div className="hero-text">
            <span className="hero-tag">✦ Your voice matters</span>
            <h1>Speak up.<br /><span>Get heard.</span></h1>
            <p>
              Submit complaints anonymously or with your name.
              Track every update in real time until it's resolved.
            </p>
            <div className="hero-btns">
              <Link to="/submit" className="btn-gold">Submit Complaint</Link>
              <Link to="/status" className="btn-ghost">Track Status</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">100%</span>
                <span className="hero-stat-label">Anonymous option</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">Live</span>
                <span className="hero-stat-label">Real-time tracking</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">Fast</span>
                <span className="hero-stat-label">Quick resolution</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <HeroIllustration />
          </div>
        </div>
      </div>

      {/* ── How it works ── */}
      <section className="hiw-section">
        <div className="hiw-inner">
          <div className="hiw-header">
            <span className="hiw-eyebrow">How it works</span>
            <h2 className="hiw-title">Four simple steps to resolution</h2>
            <p className="hiw-desc">
              From filing to resolution — the entire process is transparent,
              fast, and designed around you.
            </p>
          </div>

          <div className="hiw-image-wrap">
            <div className="hiw-image-frame">
              <img
                src="/how-it-works.png"
                alt="How VoiceBox works — File, Report, Track, Resolve"
                className="hiw-image"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div className="hiw-image-overlay" />
              <div className="hiw-img-fallback" style={{display:'none'}}>
                Image not found — make sure <code>how-it-works.png</code> is in <code>frontend/public/</code>
              </div>
            </div>
            {/* step labels */}
            <div className="hiw-steps">
              {[
                { num: "01", label: "File a Complaint" },
                { num: "02", label: "Report an Issue" },
                { num: "03", label: "Track Your Status" },
                { num: "04", label: "Get Resolution" },
              ].map((s) => (
                <div className="hiw-step" key={s.num}>
                  <span className="hiw-step-num">{s.num}</span>
                  <span className="hiw-step-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA strip */}
          <div className="hiw-cta">
            <p>Ready to raise your concern?</p>
            <Link to="/submit" className="btn-gold">Get Started →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
