import "./Navbar.css";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState,useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { NavLink } from "react-router-dom";
import { span } from "framer-motion/client";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const{totalItems} = useContext(CartContext);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">🍔 Quick<span>Bite</span></div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='about'>About</NavLink></li>
        <li><NavLink to='categoriesPage'>Categories</NavLink></li>
        <li>Features</li> 
      </ul>

      {/* Icons */}
      <div className="nav-icons">
        <FaSearch className="icon" />
        <NavLink to="/cart"><div className="cart-icon">
          <FaShoppingCart className="icon" />
          {totalItems > 0  && (
            <span className="cart-count">{totalItems}</span>
          )}
        </div>
        </NavLink>
        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
