import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaCalendarAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Signup.css';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
  
    const user = {
      firstName,
      lastName,
      email,
      dob,
      password,
    };
  
    try 
    {
      const response = await fetch('http://localhost:8080/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        console.log('Signup successful');
        navigate('/login');
      } else {
        console.log('Signup failed');
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred. Please try again.');
    }
  };
  

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-header">
          <h2>Create Your Account</h2>
          <p>Join Rent 'N Roll and enjoy exclusive benefits and deals!</p>
        </div>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <div className="input-container">
              <FaUser className="icon" />
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="Enter your first name"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <div className="input-container">
              <FaUser className="icon" />
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-container">
              <FaEnvelope className="icon" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <div className="input-container">
              <FaCalendarAlt className="icon" />
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <div className="input-container">
              <FaLock className="icon" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Create a new password"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-container">
              <FaLock className="icon" />
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm your password"
              />
            </div>
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="signin-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
