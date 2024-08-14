import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'; // Importing the login icon
import './NavigationBar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">Rent 'N Roll</Link>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/bookings" className="nav-link">Booking</Link>
        </li>
        <li className="navbar-item">
          <Link to="/vehicles" className="nav-link">Vehicles</Link>
        </li>
        <li className="navbar-item">
          <Link to="/review" className="nav-link">Review</Link>
        </li>
        <li className="navbar-item navbar-auth">
          <Link to="/login" className="nav-link login-link">
            <FaUser className="login-icon" /> Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
