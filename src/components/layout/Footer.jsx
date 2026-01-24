export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <p>© {new Date().getFullYear()} SignalCore</p>
                <p className="footer-note">
                    API-first intelligence layer · Demo / portfolio project
                </p>
            </div>
        </footer>
    );
}
