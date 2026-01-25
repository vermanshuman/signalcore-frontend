export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1>SignalCore</h1>
                    <p>
                        <strong>
                            API-first. Developer-only. Built for developers by developers.
                        </strong>
                    </p>
                    <p>
                        Transform complex error logs into clear, actionable insights with
                        AI-powered analysis. Currently focused on our error explanation API.
                    </p>
                    <div className="button-group">
                        <a href="/demo" className="btn primary">Try Live Demo</a>
                        <a href="/docs" className="btn secondary">Read API Docs</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
