import "./LandingPage.css";
import Header from "./Header";

export default function LandingPage() {
  return (
    <div className="landing">
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Signal Core</h1>
            <p>Instantly understand and fix error logs with AI-powered analysis.</p>
            <p>Signore automatically analyzes production errors and transforms complex logs into clear, actionable insights in seconds.</p>
            <div className="button-group">
              <a href="/trial" className="btn primary">Start Trial</a>
              <a href="/docs" className="btn secondary">Read API Docs</a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="problem-statement">
        <div className="container">
          <h2>The Problem Every Team Faces</h2>
          <div className="problem-items">
            <div className="problem-item">
              <p>🚨 Debugging production errors takes hours, not minutes</p>
            </div>
            <div className="problem-item">
              <p>📋 Log files are massive and impossible to parse manually</p>
            </div>
            <div className="problem-item">
              <p>⏳ Wasted time digging through stack traces instead of fixing issues</p>
            </div>
            <div className="problem-item">
              <p>🔍 Critical errors slip through the cracks unnoticed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>What SignalCore Does</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📨</div>
              <h3>Send Error Logs</h3>
              <p>Use our API-first approach. Send any error log from any source - no UI complexity needed.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>AI Analysis</h3>
              <p>Our AI engine instantly analyzes the error, understands context, and identifies patterns.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Structured Explanations</h3>
              <p>Get clear, readable explanations of what went wrong and why it happened.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛠️</div>
              <h3>Fix Suggestions</h3>
              <p>Receive actionable recommendations to resolve the issue immediately.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>API-First Design</h3>
              <p>Lightweight integration. No complex UI. Just reliable APIs and clean responses.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Data Privacy</h3>
              <p>Enterprise-grade security with no vendor lock-in. Cancel anytime with zero friction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2>How Signore Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Connect Your Logs</h3>
              <p>Send your logs from any source - application servers, containers, or cloud platforms.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>AI Analysis</h3>
              <p>Our AI engine processes and understands complex error patterns in real-time.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Get Insights</h3>
              <p>Receive clear, actionable explanations and recommendations to fix issues faster.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Take Action</h3>
              <p>Fix issues faster and prevent future problems with data-driven insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="audience">
        <div className="container">
          <h2>Who SignalCore Is For</h2>
          <div className="audience-grid">
            <div className="audience-item">
              <h3>✅ Backend & Full-Stack Developers</h3>
              <p>Who spend hours debugging production issues and want instant clarity.</p>
            </div>
            <div className="audience-item">
              <h3>✅ Small Teams & Startups</h3>
              <p>Who need powerful error analysis without complex infrastructure.</p>
            </div>
            <div className="audience-item">
              <h3>❌ Not for Non-Technical Users</h3>
              <p>SignalCore is API-first and developer-focused.</p>
            </div>
            <div className="audience-item">
              <h3>❌ Not Yet for Enterprise SLAs</h3>
              <p>We're early. Focus is on core functionality and API stability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <h2>Why Choose SignalCore</h2>
          <div className="benefits-content">
            <div className="benefit-item">
              <h3>Reduce MTTR by 80%</h3>
              <p>Mean Time To Resolution drops when you get instant, AI-powered error explanations.</p>
            </div>
            <div className="benefit-item">
              <h3>Better Developer Experience</h3>
              <p>Engineers spend less time debugging cryptic logs and more time shipping features.</p>
            </div>
            <div className="benefit-item">
              <h3>Proactive Error Monitoring</h3>
              <p>Catch patterns and anomalies before they become critical issues.</p>
            </div>
            <div className="benefit-item">
              <h3>Cost Efficiency</h3>
              <p>Reduce engineering overhead and infrastructure costs with faster issue resolution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>Loved by Developers</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"SignalCore reduced our debugging time from hours to minutes. The AI explanations are surprisingly accurate and actionable."</p>
              <div className="testimonial-author">
                <div className="author-avatar">AK</div>
                <div>
                  <strong>Alex Kumar</strong>
                  <span>Senior Backend Developer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"No UI bloat. Just a clean API that actually solves the problem. This is what we needed."</p>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div>
                  <strong>Jordan Davis</strong>
                  <span>Full-Stack Developer at TechStartup</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"We can actually focus on building now instead of firefighting logs. SignalCore is a game-changer."</p>
              <div className="testimonial-author">
                <div className="author-avatar">RP</div>
                <div>
                  <strong>Rachel Park</strong>
                  <span>Engineering Lead</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stat-item">
            <h3>500K+</h3>
            <p>Errors Analyzed Daily</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Teams Using Signore</p>
          </div>
          <div className="stat-item">
            <h3>99.9%</h3>
            <p>Uptime SLA</p>
          </div>
          <div className="stat-item">
            <h3>80%</h3>
            <p>Avg. MTTR Reduction</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Start Debugging Smarter Today</h2>
          <p>Join hundreds of engineering teams who are transforming their error management.</p>
          <div className="cta-buttons">
            <a href="/trial" className="btn primary btn-large">Start Your Free Trial</a>
            <a href="/contact" className="btn secondary btn-large">Talk to Sales</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Roadmap</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API Reference</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Signore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
