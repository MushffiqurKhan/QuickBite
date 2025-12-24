import "./Navbar.css";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">🍔 Quick<span>Bite</span></div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Categories</li>
        <li>Features</li>
      </ul>

      {/* Icons */}
      <div className="nav-icons">
        <FaSearch className="icon" />
        <div className="cart-icon">
          <FaShoppingCart className="icon" />
        </div>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
