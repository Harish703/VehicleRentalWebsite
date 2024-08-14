import React, { useState } from 'react';
import '../Css/Payment.css';

// Import images
import gpayImage from '../Components/Assets/gpay.jpg';
import phonepeImage from '../Components/Assets/phonepe.png';
import applepayImage from '../Components/Assets/applepay.png';
import creditcardImage from '../Components/Assets/cdlogo.jpg';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add your form validation logic here
    if (!cardNumber || !expiryDate || !cvv || !cardholderName) {
      setError('All fields are required.');
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
      setError('');
    }, 2000); // Simulate a delay for the payment process
  };

  return (
    <div className="payment-page-container">
      <div className="payment-content">
        <h2>Payment Details</h2>
        <div className="payment-methods">
          <a href="https://pay.google.com" target="_blank" rel="noopener noreferrer">
            <img src={gpayImage} alt="Google Pay" className="payment-method-icon" />
          </a>
          <a href="https://www.phonepe.com" target="_blank" rel="noopener noreferrer">
            <img src={phonepeImage} alt="PhonePe" className="payment-method-icon" />
          </a>
          <a href="https://www.apple.com/apple-pay/" target="_blank" rel="noopener noreferrer">
            <img src={applepayImage} alt="Apple Pay" className="payment-method-icon" />
          </a>
          <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer">
            <img src={creditcardImage} alt="Credit/Debit Card" className="payment-method-icon" />
          </a>
        </div>
        <form onSubmit={handleSubmit} className="payment-form">
          {error && <div className="error-message">{error}</div>}
          {isSuccess && !error && <div className="success-message">Payment Successful!</div>}
          <div className="form-group">
            <label htmlFor="cardholder-name">Cardholder Name</label>
            <input
              type="text"
              id="cardholder-name"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              placeholder="Card Holder's Name"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input
              type="text"
              id="card-number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              required
              className="form-input"
            />
          </div>
          <div className="form-group form-group-row">
            <div className="form-group half-width">
              <label htmlFor="expiry-date">Expiry Date</label>
              <input
                type="text"
                id="expiry-date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                required
                className="form-input"
              />
            </div>
            <div className="form-group half-width">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                required
                className="form-input"
              />
            </div>
          </div>
          <button type="submit" className="submit-btn">
            {isSubmitting ? <span className="loading-spinner"></span> : 'Pay Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
