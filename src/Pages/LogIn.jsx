import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/LogIn.css';
import video from '../Components/Assets/signinvid.mp4';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const adminCredentials = {
    email: 'ronniejr@gmail.com',
    password: 'siuuu'
  };
  const logincredential={email,password};
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (email === adminCredentials.email && password === adminCredentials.password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('email', email);
      navigate('/admin');
    } else {
      
      try 
    {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logincredential),
      });
  
      if (response.ok) {
        console.log('Signup successful');
        navigate('/register');
      } else {
        console.log('Signup failed');
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred. Please try again.');
    }
      
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signin-page">
      <video className="background-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="signin-container">
        <div className="signin-form">
          <h2>Welcome Back!</h2>
          <p>Sign in to access your account and explore our wide range of vehicles for rent.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-container">
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
              <label htmlFor="password">Password</label>
              <div className="input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
                <span
                  className="toggle-password"
                  onClick={toggleShowPassword}
                  role="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <button type="submit" className="signin-button">Sign In</button>
          </form>
          <div className="social-login">
            <p>Or continue with</p>
            <div className="social-icons">
              <a href="https://accounts.google.com" className="social-icon" aria-label="Sign in with Google"><FaGoogle /></a>
              <a href="https://www.facebook.com/login" className="social-icon" aria-label="Sign in with Facebook"><FaFacebookF /></a>
              <a href="https://appleid.apple.com/account" className="social-icon" aria-label="Sign in with Apple"><FaApple /></a>
            </div>
          </div>
          <div className="signup-link">
            <p>New to Rent 'N Roll? <Link to="/signup">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
