export default function HowItWorks() {
    return (
        <section className="how-it-works">
            <div className="container">
                <h2>How SignalCore Works</h2>

                <div className="steps">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h3>Send Logs</h3>
                        <p>Send raw logs or error traces to the API.</p>
                    </div>

                    <div className="step">
                        <div className="step-number">2</div>
                        <h3>Analyze</h3>
                        <p>SignalCore classifies and reasons about the error.</p>
                    </div>

                    <div className="step">
                        <div className="step-number">3</div>
                        <h3>Explain</h3>
                        <p>You receive a structured explanation with fixes.</p>
                    </div>

                    <div className="step">
                        <div className="step-number">4</div>
                        <h3>Act</h3>
                        <p>Engineers fix faster with clarity and confidence.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
