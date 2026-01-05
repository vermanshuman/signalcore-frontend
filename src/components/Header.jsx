import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <svg className="navbar-logo-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Stylized 'S' mark */}
            <path d="M8 10C8 8.89543 8.89543 8 10 8H20C21.1046 8 22 8.89543 22 10V12C22 13.1046 21.1046 14 20 14H12V14C12 14 16 14 18 16C20 18 20 20 20 22C20 23.1046 19.1046 24 18 24H8C6.89543 24 6 23.1046 6 22V20C6 18.8954 6.89543 18 8 18H16V18C16 18 12 18 10 16C8 14 8 12 8 10Z" fill="#1a1a1a"/>
          </svg>
          <span className="navbar-logo-text">SignalCore</span>
        </div>
        
        {/* Center Navigation */}
        <nav className="navbar-menu">
          <a href="#" className="nav-link">Docs</a>
          <a href="#" className="nav-link">Pricing</a>
        </nav>

        {/* Right Side - Auth & CTA */}
        <div className="navbar-actions">
          <a href="#" className="nav-link login">Log In</a>
          <button className="btn-signup">Get API Key</button>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
