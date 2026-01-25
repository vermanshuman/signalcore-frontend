export default function LoadingOverlay({ message = "Analyzing error…" }) {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(15, 23, 42, 0.55)",
                backdropFilter: "blur(6px)",
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    background: "#0f172a",
                    padding: "32px 40px",
                    borderRadius: "12px",
                    color: "#fff",
                    textAlign: "center",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                    maxWidth: "420px",
                }}
            >
                <div
                    style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        border: "4px solid rgba(255,255,255,0.2)",
                        borderTopColor: "#6366f1",
                        margin: "0 auto 20px",
                        animation: "spin 1s linear infinite",
                    }}
                />

                <h3 style={{ marginBottom: "8px" }}>{message}</h3>
                <p style={{ fontSize: "14px", opacity: 0.85 }}>
                    Understanding context, root cause, and fixes…
                </p>
            </div>

            <style>
                {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
            </style>
        </div>
    );
}
