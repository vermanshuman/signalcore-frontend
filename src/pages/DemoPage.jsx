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

function getInitialMode() {
    const hash = window.location.hash || "";
    const query = hash.split("?")[1];
    if (!query) return "explain";
    const params = new URLSearchParams(query);
    return params.get("mode") === "agent" ? "agent" : "explain";
}

export default function DemoPage() {
    const [logs, setLogs] = useState("");
    const [mode, setMode] = useState(getInitialMode);
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
            const endpoint =
                mode === "agent"
                    ? "/v1/demo/incident-investigator"
                    : "/v1/demo/error-explain";

            const payload =
                mode === "agent"
                    ? { error_log: logs }
                    : { logs };

            const data = await post(endpoint, payload);
            setResult(data);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }

    function setSample(sample) {
        setLogs(sample);
        setResult(null);
        setError("");
    }

    return (
        <>
            {loading && <LoadingOverlay message="Analyzing…" />}

            <section className="features">
                <div className="container">
                    <h2 style={{ marginBottom: "12px" }}>
                        {mode === "agent"
                            ? "Incident Investigator Agent"
                            : "Live Error Explanation Demo"}
                    </h2>

                    {/* MODE SWITCH */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "12px",
                            marginBottom: "16px",
                        }}
                    >
                        <button
                            className={`btn ${mode === "explain" ? "primary" : ""}`}
                            onClick={() => setMode("explain")}
                        >
                            Error Explanation
                        </button>

                        <button
                            className={`btn ${mode === "agent" ? "primary" : ""}`}
                            onClick={() => setMode("agent")}
                        >
                            Incident Investigator (Agent)
                        </button>
                    </div>

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
                                setSample("TypeError: Cannot read property id of undefined")
                            }
                            className="btn secondary"
                        >
                            JavaScript
                        </button>

                        <button
                            onClick={() =>
                                setSample(
                                    "NullReferenceException: Object reference not set to an instance of an object"
                                )
                            }
                            className="btn secondary"
                        >
                            .NET
                        </button>

                        <button
                            onClick={() =>
                                setSample(
                                    "AttributeError: 'NoneType' object has no attribute 'name'"
                                )
                            }
                            className="btn secondary"
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
                            }}
                        />

                        <button
                            onClick={handleRun}
                            disabled={!logs.trim() || loading}
                            className="btn primary"
                        >
                            {mode === "agent" ? "Investigate Incident" : "Run Analysis"}
                        </button>
                    </div>

                    {error && (
                        <div style={{ color: "#b00020", marginBottom: "24px" }}>
                            {error}
                        </div>
                    )}

                    {/* AGENT RESULT */}
                    {result && mode === "agent" && (
                        <div className="features-grid">
                            <ResultCard title="Agent Execution">
                                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                                    {result.agent_steps.map((s, i) => (
                                        <li key={i}>
                                            <strong>{s.step}</strong> → {s.result}
                                        </li>
                                    ))}
                                </ul>
                            </ResultCard>

                            <ResultCard title="Agent Score">
                                <strong>{Math.round(result.agent_score * 100)}%</strong>
                            </ResultCard>

                            <ResultCard title="Root Cause">
                                <p>{result.root_cause}</p>
                            </ResultCard>

                            <ResultCard title="Contributing Factors">
                                <ul>
                                    {result.contributing_factors.map((c, i) => (
                                        <li key={i}>{c}</li>
                                    ))}
                                </ul>
                            </ResultCard>

                            <ResultCard title="What to Check Next">
                                <ul>
                                    {result.checks_to_perform.map((c, i) => (
                                        <li key={i}>{c}</li>
                                    ))}
                                </ul>
                            </ResultCard>

                            <ResultCard title="Fix Priority">
                                <strong>{result.fix_priority}</strong>
                            </ResultCard>

                            <ResultCard title="Recommended Fix">
                                <p>{result.recommended_fix}</p>
                            </ResultCard>

                            <ResultCard title="Confidence">
                                <strong>
                                    {Math.round(result.confidence * 100)}%
                                </strong>
                            </ResultCard>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
