export default function Features() {
    return (
        <section className="features">
            <div className="container">
                <h2>What SignalCore Does</h2>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">📨</div>
                        <h3>Send Error Logs</h3>
                        <p>Send any error log from any source using a simple API.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">🧠</div>
                        <h3>AI Analysis</h3>
                        <p>SignalCore understands context and identifies root causes.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">💡</div>
                        <h3>Structured Explanations</h3>
                        <p>Clear summaries, causes, checks, and fixes — always structured.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">🛠️</div>
                        <h3>Fix Suggestions</h3>
                        <p>Actionable recommendations engineers can apply immediately.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>API-First</h3>
                        <p>No dashboards. No UI dependency. Just reliable APIs.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Data Privacy</h3>
                        <p>Stateless requests. No long-term data storage.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
