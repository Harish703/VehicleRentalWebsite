import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Admin/BookingReservations.css';

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8080/api/getregisterr`);
        setUserInfo(response.data); // Assuming response.data is an array of users
      } catch (error) {
        console.error('There was an error fetching the user data!', error);
        setError('Failed to load user data. Please try again later.');
      }
    }

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
        <h2>User Information</h2>
        {error && <p className="error-message">{error}</p>}
        {userInfo.length === 0 ? (
          <p>Loading user info...</p>
        ) : (
          userInfo.map((user, index) => (
            <div className="user-info">
            <div key={index} className="user-details">
              <p><strong>First Name:</strong> {user.firstName}</p>
              <p><strong>Last Name:</strong> {user.lastName}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.mobileNumber}</p>
              <p><strong>Date Of Birth :</strong> {user.dateOfBirth}</p>
              <p><strong>Address :</strong> {user.address}</p>
            </div>
            </div>
          ))
        )}
    </div>
  );
};

export default Dashboard;


{/* <div className="reservations"> */}
  {/* <h2>Your Reservations</h2> */}
  {/* {error && !reservations.length ? (
    <p className="error-message">{error}</p>
  ) : !reservations.length ? (
    <p>No reservations found.</p>
  ) : (
    <div className="reservation-list">
      {reservations.map(reservation => (
        <div key={reservation.id} className="reservation-item">
          <p><strong>Booking ID:</strong> {reservation.id}</p>
          <p><strong>Address:</strong> {reservation.address}</p>
          <p><strong>Pickup Date:</strong> {new Date(reservation.pickupDate).toLocaleDateString()}</p>
          <p><strong>Drop-off Date:</strong> {new Date(reservation.dropoffDate).toLocaleDateString()}</p>
          <div className="reservation-actions">
          </div>
        </div>
      ))}
    </div>
  )} */}
{/* </div> */}