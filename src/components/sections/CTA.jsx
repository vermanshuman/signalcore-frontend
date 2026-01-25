export default function CTA({
                                title,
                                subtitle,
                                primaryLabel,
                                primaryHref,
                            }) {
    return (
        <section className="cta">
            <div className="container">
                <h2>{title || "Ready to Debug Smarter?"}</h2>

                <p>
                    {subtitle ||
                        "Integrate SignalCore into your workflow and get structured error explanations instantly."}
                </p>

                <div className="button-group" style={{ justifyContent: "center" }}>
                    {primaryLabel && primaryHref ? (
                        <a href={primaryHref} className="btn primary">
                            {primaryLabel}
                        </a>
                    ) : (
                        <>
                            <a href="/docs" className="btn primary">
                                Get API Key
                            </a>
                            <a href="/docs" className="btn secondary">
                                View Docs
                            </a>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
