// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import axios from 'axios';
// import '../Css/Booking.css';

// const BookingPage = () => {
//   const [pickUpLocation, setPickUpLocation] = useState('');
//   const [dropOffLocation, setDropOffLocation] = useState('');
//   const [pickUpDate, setPickUpDate] = useState(new Date());
//   const [dropOffDate, setDropOffDate] = useState(new Date());
//   const [pickUpTime, setPickUpTime] = useState('00:00');
//   const [dropOffTime, setDropOffTime] = useState('00:00');
//   const [reservations, setReservations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   const locations = [
//     "Gandhipuram, Coimbatore",
//     "Palladam, Tirupur",
//     "Omalur, Salem",
//     "Tirunelveli, Tirunelveli",
//     "Trichy, Tiruchirapalli",
//     "Tutricorin, Thoothukudi",
//     "Madurai, Madurai",
//     "Chennai, Chennai"
//   ];

//   const times = [
//     "00:00", "01:00", "02:00", "03:00", "04:00",
//     "05:00", "06:00", "07:00", "08:00", "09:00",
//     "10:00", "11:00", "12:00", "13:00", "14:00",
//     "15:00", "16:00", "17:00", "18:00", "19:00",
//     "20:00", "21:00", "22:00", "23:00"
//   ];

//   useEffect(() => {
//     axios.post('http://localhost:8080/api/getbookings')
//       .then(response => {
//         setReservations(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching reservations:', error);
//         setError('Error fetching reservations.');
//         setLoading(false);
//       });
//   }, []);

//   const calculateDuration = () => {
//     const pickUpDateTime = new Date(`${pickUpDate.toDateString()} ${pickUpTime}`);
//     const dropOffDateTime = new Date(`${dropOffDate.toDateString()} ${dropOffTime}`);
//     const duration = dropOffDateTime - pickUpDateTime;

//     if (duration < 0) return 'Invalid duration';

//     const days = Math.floor(duration / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

//     return `${days} Days ${hours} Hours ${minutes} Minutes`;
//   };

//   const handleSearch = () => {
//     if (!pickUpLocation || !dropOffLocation || !pickUpTime || !dropOffTime) {
//       alert('Please fill out all fields.');
//       return;
//     }
//     if (dropOffDate < pickUpDate || (dropOffDate.getTime() === pickUpDate.getTime() && dropOffTime <= pickUpTime)) {
//       alert('Drop-off date and time must be after pick-up date and time.');
//       return;
//     }
//     const duration = calculateDuration();
//     navigate(`/vehicles?pickup=${encodeURIComponent(pickUpLocation)}&dropoff=${encodeURIComponent(dropOffLocation)}&duration=${encodeURIComponent(duration)}`);
//   };

//   const handleModify = (reservation) => {
//     navigate(`/modify-reservation/${reservation.id}`);
//   };

//   const handleCancel = (id) => {
//     axios.delete(`/api/deletebookings/${id}`)
//       .then(() => {
//         setReservations(reservations.filter(reservation => reservation.id !== id));
//       })
//       .catch(error => console.error('Error cancelling reservation:', error));
//   };

//   return (
//     <div className="booking-container">
//       <h1>Book Now</h1>
//       <div className="booking-form">
//         <div className="form-field">
//           <label>Pick-up Location</label>
//           <select value={pickUpLocation} onChange={(e) => setPickUpLocation(e.target.value)}>
//             {locations.map((location, index) => (
//               <option key={index} value={location}>{location}</option>
//             ))}
//           </select>
//         </div>

//         <div className="form-field">
//           <label>Drop-off Location</label>
//           <select value={dropOffLocation} onChange={(e) => setDropOffLocation(e.target.value)}>
//             {locations.map((location, index) => (
//               <option key={index} value={location}>{location}</option>
//             ))}
//           </select>
//         </div>

//         <div className="form-field">
//           <label>Pick-up Date</label>
//           <DatePicker
//             selected={pickUpDate}
//             onChange={(date) => setPickUpDate(date)}
//             dateFormat="dd/MM/yyyy"
//           />
//         </div>

//         <div className="form-field">
//           <label>Drop-off Date</label>
//           <DatePicker
//             selected={dropOffDate}
//             onChange={(date) => setDropOffDate(date)}
//             dateFormat="dd/MM/yyyy"
//           />
//         </div>

//         <div className="form-field">
//           <label>Pick-up Time</label>
//           <select value={pickUpTime} onChange={(e) => setPickUpTime(e.target.value)}>
//             {times.map((time, index) => (
//               <option key={index} value={time}>{time}</option>
//             ))}
//           </select>
//         </div>

//         <div className="form-field">
//           <label>Drop-off Time</label>
//           <select value={dropOffTime} onChange={(e) => setDropOffTime(e.target.value)}>
//             {times.map((time, index) => (
//               <option key={index} value={time}>{time}</option>
//             ))}
//           </select>
//         </div>

//         <button onClick={handleSearch} className="search-button">Search</button>
//       </div>

//       <h2>Your Reservations</h2>
//       <div className="reservations-list">
//         {loading ? <p>Loading reservations...</p> : (
//           <>
//             {error && <p>{error}</p>}
//             {reservations.length > 0 ? (
//               reservations.map(reservation => (
//                 <div key={reservation.id} className="reservation-item">
//                   <h3>{reservation.vehicleName}</h3>
//                   <p><strong>Pick-up:</strong> {reservation.pickUpLocation} on {reservation.pickUpDate} at {reservation.pickUpTime}</p>
//                   <p><strong>Drop-off:</strong> {reservation.dropOffLocation} on {reservation.dropOffDate} at {reservation.dropOffTime}</p>
//                   <p><strong>Duration:</strong> {reservation.duration}</p>
//                   <button onClick={() => handleModify(reservation)}>Modify</button>
//                   <button onClick={() => handleCancel(reservation.id)}>Cancel</button>
//                 </div>
//               ))
//             ) : (
//               <p>No reservations found.</p>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookingPage;import React, { useState, useEffect } from 'react';


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Css/Booking.css';

const BookingPage = () => {
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [pickUpDate, setPickUpDate] = useState(new Date());
  const [dropOffDate, setDropOffDate] = useState(new Date());
  const [pickUpTime, setPickUpTime] = useState('00:00');
  const [dropOffTime, setDropOffTime] = useState('00:00');
  const navigate = useNavigate();

  const locations = [
    "Gandhipuram, Coimbatore",
    "Palladam, Tirupur",
    "Omalur, Salem",
    "Tirunelveli, Tirunelveli",
    "Trichy, Tiruchirapalli",
    "Tutricorin, Thoothukudi",
    "Madurai, Madurai",
    "Chennai, Chennai"
  ];

  const times = [
    "00:00", "01:00", "02:00", "03:00", "04:00",
    "05:00", "06:00", "07:00", "08:00", "09:00",
    "10:00", "11:00", "12:00", "13:00", "14:00",
    "15:00", "16:00", "17:00", "18:00", "19:00",
    "20:00", "21:00", "22:00", "23:00"
  ];

  const calculateDuration = () => {
    const pickUpDateTime = new Date(`${pickUpDate.toDateString()} ${pickUpTime}`);
    const dropOffDateTime = new Date(`${dropOffDate.toDateString()} ${dropOffTime}`);
    const duration = dropOffDateTime - pickUpDateTime;

    if (duration < 0) return 'Invalid duration';

    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

    return `${days} Days ${hours} Hours ${minutes} Minutes`;
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (!pickUpLocation || !dropOffLocation || !pickUpTime || !dropOffTime) {
      alert('Please fill out all fields.');
      return;
    }
    if (dropOffDate < pickUpDate || (dropOffDate.getTime() === pickUpDate.getTime() && dropOffTime <= pickUpTime)) {
      alert('Drop-off date and time must be after pick-up date and time.');
      return;
    }

    const duration = calculateDuration();

    const bookingData = {
      pickUpLocation,
      dropOffLocation,
      pickUpDate,
      dropOffDate,
      pickUpTime,
      dropOffTime,
      duration
    };

    navigate('/vehicles', { state: bookingData });
  };

  return (
    <div className="booking-container">
      <h1>Book Now</h1>
      <div className="booking-form">
        <div className="form-field">
          <label>Pick-up Location</label>
          <select value={pickUpLocation} onChange={(e) => setPickUpLocation(e.target.value)}>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label>Drop-off Location</label>
          <select value={dropOffLocation} onChange={(e) => setDropOffLocation(e.target.value)}>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label>Pick-up Date</label>
          <DatePicker
            selected={pickUpDate}
            onChange={(date) => setPickUpDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </div>

        <div className="form-field">
          <label>Drop-off Date</label>
          <DatePicker
            selected={dropOffDate}
            onChange={(date) => setDropOffDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </div>

        <div className="form-field">
          <label>Pick-up Time</label>
          <select value={pickUpTime} onChange={(e) => setPickUpTime(e.target.value)}>
            {times.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label>Drop-off Time</label>
          <select value={dropOffTime} onChange={(e) => setDropOffTime(e.target.value)}>
            {times.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
    </div>
  );
};

export default BookingPage;
