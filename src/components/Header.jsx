import React from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      {/* Left - Logo */}
      <div className="logo-container">
        <Link to="/" className="logo">
          <div className="hexagon"></div>
          <span className="logo-text">HEXA-SHOP</span>
        </Link>
      </div>

      {/* Center - Navigation */}
      <nav className="navigation">
        <Link to="/men" className="nav-link">MEN</Link>
        <Link to="/women" className="nav-link">WOMEN</Link>
        {/* <Link to="/kids" className=" k">KIDS</Link>
        <Link to="/home-living" className=" k">HOME & LIVING</Link>
        <Link to="/beauty" className=" k">BEAUTY</Link> */}
        
      </nav>

      {/* Right - Search Bar & Icons */}
      <div className="right-section">
        {/* Search Bar */}
        <div className="search-bar">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="search-input"
          />
        </div>

        {/* Icons */}
        <div className="icons">
        <Link to="/signup"><div className="icon-item">
            <User size={20} />
            <span className="icon-text">Profile</span>
          </div>
          </Link> 
          <div className="icon-item">
            <Heart size={20} />
            <span className="icon-text">Wishlist</span>
          </div>
          <Link to="/bag">
          <div className="icon-item">
            
            <ShoppingBag size={20} />
            <span className="icon-text">Bag</span>
            
          </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;