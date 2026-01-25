import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <header className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand" style={{ textDecoration: "none" }}>
                    <svg
                        className="navbar-logo-svg"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 10C8 8.89543 8.89543 8 10 8H20C21.1046 8 22 8.89543 22 10V12C22 13.1046 21.1046 14 20 14H12C12 14 16 14 18 16C20 18 20 20 20 22C20 23.1046 19.1046 24 18 24H8C6.89543 24 6 23.1046 6 22V20C6 18.8954 6.89543 18 8 18H16C16 18 12 18 10 16C8 14 8 12 8 10Z"
                            fill="#111"
                        />
                    </svg>
                    <span className="navbar-logo-text">SignalCore</span>
                </Link>
            </div>
        </header>
    );
}
