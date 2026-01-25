import { useState, useRef } from "react";
import { post } from "../services/apiClient";
import LoadingOverlay from "../components/common/LoadingOverlay";
import "../styles/landing.css";

function ResultCard({ title, children }) {
    return (
        <div className="feature-card" style={{ textAlign: "left" }}>
            <h3 style={{ marginBottom: "12px" }}>{title}</h3>
            {children}
        </div>
    );
}

export default function DemoPage() {
    const [logs, setLogs] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [result, setResult] = useState(null);

    const lastRunAt = useRef(0);
    const DEBOUNCE_MS = 1500;

    async function handleRun() {
        const now = Date.now();
        if (now - lastRunAt.current < DEBOUNCE_MS) return;
        lastRunAt.current = now;

        setLoading(true);
        setError("");
        setResult(null);

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
        <>
            {loading && <LoadingOverlay message="Analyzing error…" />}

            <section className="features">
                <div className="container">
                    <h2 style={{ marginBottom: "16px" }}>Live Error Explanation Demo</h2>

                    <p style={{ textAlign: "center", color: "#666", marginBottom: "32px" }}>
                        Demo usage is limited for evaluation purposes.
                        Production deployments enforce server-side rate limiting.
                    </p>

                    {/* SAMPLE BUTTONS */}
                    <div
                        style={{
                            display: "flex",
                            gap: "12px",
                            justifyContent: "center",
                            marginBottom: "16px",
                            flexWrap: "wrap",
                        }}
                    >
                        <button
                            onClick={() =>
                                setLogs("TypeError: Cannot read property id of undefined")
                            }
                            style={{
                                padding: "10px 14px",
                                borderRadius: "8px",
                                border: "1px solid #1e3a8a",
                                background: "#ffffff",
                                color: "#1e3a8a",
                                fontWeight: 600,
                                cursor: "pointer",
                            }}
                        >
                            JavaScript
                        </button>

                        <button
                            onClick={() =>
                                setLogs(
                                    "NullReferenceException: Object reference not set to an instance of an object"
                                )
                            }
                            style={{
                                padding: "10px 14px",
                                borderRadius: "8px",
                                border: "1px solid #1e3a8a",
                                background: "#ffffff",
                                color: "#1e3a8a",
                                fontWeight: 600,
                                cursor: "pointer",
                            }}
                        >
                            .NET
                        </button>

                        <button
                            onClick={() =>
                                setLogs(
                                    "AttributeError: 'NoneType' object has no attribute 'name'"
                                )
                            }
                            style={{
                                padding: "10px 14px",
                                borderRadius: "8px",
                                border: "1px solid #1e3a8a",
                                background: "#ffffff",
                                color: "#1e3a8a",
                                fontWeight: 600,
                                cursor: "pointer",
                            }}
                        >
                            Python
                        </button>
                    </div>

                    {/* INPUT */}
                    <div className="feature-card" style={{ marginBottom: "32px" }}>
            <textarea
                value={logs}
                onChange={(e) => setLogs(e.target.value)}
                placeholder="Paste error log here..."
                rows={8}
                disabled={loading}
                style={{
                    width: "100%",
                    padding: "14px",
                    marginBottom: "20px",
                    opacity: loading ? 0.6 : 1,
                    cursor: loading ? "not-allowed" : "text",
                }}
            />

                        <button
                            onClick={handleRun}
                            disabled={!logs.trim() || loading}
                            className="btn primary"
                        >
                            Run Analysis
                        </button>
                    </div>

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
                                    {result.checks?.map((c, i) => (
                                        <li key={i}>{c}</li>
                                    ))}
                                </ul>
                            </ResultCard>

                            <ResultCard title="Fix Suggestions">
                                <ul>
                                    {result.fix?.map((f, i) => (
                                        <li key={i}>{f}</li>
                                    ))}
                                </ul>
                            </ResultCard>

                            <ResultCard title="Not the Issue">
                                <ul>
                                    {result.not_the_issue?.map((n, i) => (
                                        <li key={i}>{n}</li>
                                    ))}
                                </ul>
                            </ResultCard>

                            <ResultCard title="Confidence">
                                <strong>
                                    {Math.round((result.confidence || 0) * 100)}%
                                </strong>
                            </ResultCard>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
