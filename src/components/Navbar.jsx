import { useState } from "react";
import logo from "../assets/images/pag-logo.jpg";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Prevail Apex Global" />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>

          <Link to="/destinations" onClick={closeMenu}>
            Destinations
          </Link>

          <Link to="/how-it-works" onClick={closeMenu}>
            How It Works
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <Link
            to="/contact"
            className="navbar-cta"
            onClick={closeMenu}
          >
            Start Your Journey
            <ArrowRight size={17} />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;