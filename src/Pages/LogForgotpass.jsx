import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Logforgotpass.css';

const ForgotPassword = () => {
  const [idol, setIdol] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here
    alert(`Your idol is: ${idol}`);
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h2>Forgot Your Password?</h2>
        <p>Enter the name of your idol to proceed.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="idol">Who is your idol?</label>
            <input
              type="text"
              id="idol"
              value={idol}
              onChange={(e) => setIdol(e.target.value)}
              required
              placeholder="Enter your idol's name"
            />
          </div>
          <button type="submit" className="forgot-password-button">Submit</button>
        </form>
        <div className="back-to-signin">
          <Link to="/login">Back to Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
