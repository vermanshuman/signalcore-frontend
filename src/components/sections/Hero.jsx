import { Link } from "react-router-dom";
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
                        <Link to="/demo" className="btn primary">Try Live Demo</Link>
                        <Link to="/docs" className="btn secondary">Read API Docs</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
