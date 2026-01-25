import { useState } from "react";
import { post } from "../services/apiClient";
import "../styles/landing.css";

function ResultCard({ title, children }) {
    return (
        <div className="feature-card" style={{ textAlign: "left" }}>
            <h3 style={{ marginBottom: "12px" }}>{title}</h3>
            {children}
        </div>
    );
}

function Skeleton() {
    return (
        <div className="feature-card" style={{ marginTop: "30px" }}>
            <div style={{ height: "16px", width: "40%", background: "#e5e7eb", marginBottom: "14px" }} />
            <div style={{ height: "12px", width: "100%", background: "#e5e7eb", marginBottom: "10px" }} />
            <div style={{ height: "12px", width: "90%", background: "#e5e7eb", marginBottom: "10px" }} />
            <div style={{ height: "12px", width: "80%", background: "#e5e7eb" }} />
        </div>
    );
}

export default function DemoPage() {
    const [logs, setLogs] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [result, setResult] = useState(null);
    const [showRaw, setShowRaw] = useState(false);

    async function handleRun() {
        setLoading(true);
        setError("");
        setResult(null);
        setShowRaw(false);

        try {
            const data = await post("/v1/demo/error-explain", { logs });
            setResult(data);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="features">
            <div className="container">
                <h2 style={{ marginBottom: "20px" }}>Live Error Explanation Demo</h2>

                <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>
                    Demo usage is limited for evaluation purposes.
                    Production deployments enforce server-side rate limiting.
                </p>

                <div className="feature-card" style={{ marginBottom: "32px" }}>
          <textarea
              value={logs}
              onChange={(e) => setLogs(e.target.value)}
              placeholder="Paste error log here..."
              rows={8}
              style={{
                  width: "100%",
                  padding: "14px",
                  fontSize: "14px",
                  marginBottom: "20px",
              }}
          />

                    <button
                        onClick={handleRun}
                        disabled={!logs.trim() || loading}
                        className="btn primary"
                    >
                        {loading ? "Running…" : "Run Analysis"}
                    </button>
                </div>

                {loading && <Skeleton />}

                {error && (
                    <div style={{ color: "#b00020", marginBottom: "24px" }}>
                        {error}
                    </div>
                )}

                {result && (
                    <div className="features-grid">
                        <ResultCard title="Summary">
                            <p>{result.summary}</p>
                        </ResultCard>

                        <ResultCard title="Error Layer">
                            <strong>{result.error_layer}</strong>
                        </ResultCard>

                        <ResultCard title="Diagnosis">
                            <p>{result.diagnosis}</p>
                        </ResultCard>

                        <ResultCard title="Checks">
                            <ul>
                                {result.checks?.map((c, i) => <li key={i}>{c}</li>)}
                            </ul>
                        </ResultCard>

                        <ResultCard title="Fix Suggestions">
                            <ul>
                                {result.fix?.map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                        </ResultCard>

                        <ResultCard title="Not the Issue">
                            <ul>
                                {result.not_the_issue?.map((n, i) => <li key={i}>{n}</li>)}
                            </ul>
                        </ResultCard>

                        <ResultCard title="Confidence">
                            <strong>{Math.round((result.confidence || 0) * 100)}%</strong>
                        </ResultCard>
                    </div>
                )}
            </div>
        </section>
    );
}
