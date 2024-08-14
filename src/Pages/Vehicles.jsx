import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Css/Vehicle.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaCar, FaCogs } from 'react-icons/fa';
import car1 from '../Components/Assets/car1.jpg';
import car2 from '../Components/Assets/car2.jpg';
import car3 from '../Components/Assets/car3.jpg';
import car4 from '../Components/Assets/car4.jpg';
import car5 from '../Components/Assets/car5.jpg';
import car6 from '../Components/Assets/car6.jpg';
import car7 from '../Components/Assets/car7.jpg';
import car8 from '../Components/Assets/car8.jpg';
import car9 from '../Components/Assets/car9.jpg';
import car10 from '../Components/Assets/car10.jpg';
import car11 from '../Components/Assets/car11.jpg';
import car12 from '../Components/Assets/car12.jpg';
import car13 from '../Components/Assets/car13.jpg';
import car14 from '../Components/Assets/car14.jpg';
import car15 from '../Components/Assets/car15.jpg';
import car16 from '../Components/Assets/car16.jpg';
import car17 from '../Components/Assets/car17.jpg';
import car18 from '../Components/Assets/car18.jpg';
import car19 from '../Components/Assets/car19.jpg';
import car20 from '../Components/Assets/car20.jpg';

const VehiclePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const [pickupLocation, setPickupLocation] = useState(queryParams.get('pickup') || '');
  const [dropoffLocation, setDropoffLocation] = useState(queryParams.get('dropoff') || '');
  const [duration, setDuration] = useState(queryParams.get('duration') || '');
  const [withFuel, setWithFuel] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setPickupLocation(queryParams.get('pickup') || '');
    setDropoffLocation(queryParams.get('dropoff') || '');
    setDuration(queryParams.get('duration') || '');

    const userLoggedIn = Boolean(localStorage.getItem('userToken'));
    setIsLoggedIn(userLoggedIn);
  }, [location.search]);

  const vehicles = [
    {
      id: 1,
      name: 'Toyota Yaris',
      type: 'Automatic, Petrol',
      seating: '4 Seater',
      priceWithoutFuel: '₹ 1,500',
      priceWithFuel: '₹ 2,600',
      features: ['Air Conditioning', 'Bluetooth', 'Backup Camera'],
      image: car1,
    },
    {
      id: 2,
      name: 'Honda Accord',
      type: 'Manual, Petrol',
      seating: '4 Seater',
      priceWithoutFuel: '₹ 1,700',
      priceWithFuel: '₹ 2,800',
      features: ['Leather Seats', 'Navigation System', 'Sunroof'],
      image: car2,
    },
    {
      id: 3,
      name: 'Ford Explorer',
      type: 'Automatic, Diesel',
      seating: '7 Seater',
      priceWithoutFuel: '₹ 2,000',
      priceWithFuel: '₹ 3,000',
      features: ['4WD', 'Bluetooth', 'Rear Camera'],
      image: car3,
    },
    {
      id: 4,
      name: 'Audi A4',
      type: 'Automatic, Petrol',
      seating: '4 Seater',
      priceWithoutFuel: '₹ 5,500',
      priceWithFuel: '₹ 7,000',
      features: ['Air Conditioning', 'Leather Seats', 'Bluetooth'],
      image: car4,
    },
    {
      id: 5,
      name: 'Mercedes-Benz C-Class',
      type: 'Automatic, Diesel',
      seating: '4 Seater',
      priceWithoutFuel: '₹ 8,000',
      priceWithFuel: '₹ 9,500',
      features: ['Navigation System', 'Leather Seats', 'Bluetooth'],
      image: car5,
    },
    {
      id: 6,
      name: 'Jaguar XE',
      type: 'Automatic, Petrol',
      seating: '4 Seater',
      priceWithoutFuel: '₹ 9,000',
      priceWithFuel: '₹ 10,500',
      features: ['Leather Seats', 'Navigation System', 'Sunroof'],
      image: car6,
    },
    {
      id: 7,
      name: 'Toyota Innova Crysta',
      type: 'Automatic, Diesel',
      seating: '7 Seater',
      priceWithoutFuel: '₹ 1,500',
      priceWithFuel: '₹ 2,200',
      features: ['Air Conditioning', 'Leather Seats', 'Bluetooth'],
      image: car7,
    },
    {
      id: 8,
      name: 'Mahindra XUV500',
      type: 'Automatic, Diesel',
      seating: '7 Seater',
      priceWithoutFuel: '₹ 2,000',
      priceWithFuel: '₹ 3,000',
      features: ['Navigation System', 'Leather Seats', 'Bluetooth'],
      image: car8,
    },
    {
      id: 9,
      name: 'Ford Endeavour',
      type: 'Automatic, Diesel',
      seating: '7 Seater',
      priceWithoutFuel: '₹ 3,000',
      priceWithFuel: '₹ 4,500',
      features: ['Leather Seats', 'Sunroof', 'Bluetooth'],
      image: car9,
    },
    {
      id: 10,
      name: 'Jeep Compass',
      type: 'Automatic, Petrol',
      seating: '4 Seater',
      priceWithoutFuel: '₹ 7,500',
      priceWithFuel: '₹ 9,000',
      features: ['Air Conditioning', 'Navigation System', 'Bluetooth'],
      image: car10,
    },
    {
      id: 11,
      name: 'Land Rover Defender',
      type: 'Manual, Diesel',
      seating: '4 Seater',
      priceWithoutFuel: '₹ 15,000',
      priceWithFuel: '₹ 18,000',
      features: ['Off-road Capability', 'Navigation System', 'Bluetooth'],
      image: car11,
    },    
    {
      id: 12,
      name: 'Skoda Kodiaq',
      type: 'Automatic, Diesel',
      seating: '7 Seater',
      priceWithoutFuel: '₹ 10,500',
      priceWithFuel: '₹ 12,500',
      features: ['Leather Seats', 'Navigation System', 'Sunroof'],
      image: car12,
    },
    {
      id: 13,
      name: 'Jeep Grand Cherokee',
      type: 'Automatic, Diesel',
      seating: '4 Seater',
      priceWithoutFuel: '₹ 16,000',
      priceWithFuel: '₹ 18,500',
      features: ['4WD', 'Leather Seats', 'Sunroof'],
      image: car13,
    },
    {
      id: 14,
      name: 'Toyota Fortuner',
      type: 'Automatic, Diesel',
      seating: '7 Seater',
      priceWithoutFuel: '₹ 11,000',
      priceWithFuel: '₹ 13,000',
      features: ['Navigation System', 'Leather Seats', 'Bluetooth'],
      image: car14,
    },
    { id: 15, 
      name: 'Mahindra Thar', 
      type: 'Manual, Petrol', 
      seating: '7 Seater', 
      priceWithoutFuel: '₹ 10,000', 
      priceWithFuel: '₹ 12,500', 
      features: ['Off-road Capability', 'Bluetooth', 'Navigation System'], 
      image: car15 
    },
    { id: 16, 
      name: 'Ford Endeavour', 
      type: 'Automatic, Diesel', 
      seating: '7 Seater', 
      priceWithoutFuel: '₹ 12,000', 
      priceWithFuel: '₹ 14,500', 
      features: ['Leather Seats', 'Sunroof', 'Bluetooth'], 
      image: car16 
    },
    { id: 17, 
      name: 'Jeep Cherokee', 
      type: 'Automatic, Petrol', 
      seating: '7 Seater', 
      priceWithoutFuel: '₹ 13,500', 
      priceWithFuel: '₹ 16,000', 
      features: ['4WD', 'Navigation System', 'Leather Seats'], 
      image: car17 
    },
    { id: 18, 
      name: 'Toyota Land Cruiser', 
      type: 'Automatic, Diesel', 
      seating: '7 Seater', 
      priceWithoutFuel: '₹ 15,000', 
      priceWithFuel: '₹ 18,500', 
      features: ['Leather Seats', 'Navigation System', 'Bluetooth'], 
      image: car18 
    },
    {
      id: 19,
      name: 'Hyundai Alcazar',
      type: 'Automatic, Petrol',
      seating: '7 Seater',
      priceWithoutFuel: '₹ 9,500',
      priceWithFuel: '₹ 11,500',
      features: ['Leather Seats', 'Navigation System', 'Bluetooth'],
      image: car19,
    },
    {
      id: 20,
      name: 'Volkswagen Tiguan',
      type: 'Automatic, Petrol',
      seating: '4 Seater',
      priceWithoutFuel: '₹ 7,500',
      priceWithFuel: '₹ 9,000',
      features: ['Leather Seats', 'Bluetooth', 'Rear Camera'],
      image: car20,
    },
    
  ];

  return (
    <div className="vehicle-page">
      <div className="info-container">
        <div className="info-grid">
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div className="info-label">Pick up Location:</div>
            <div>{pickupLocation}</div>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div className="info-label">Drop off Location:</div>
            <div>{dropoffLocation}</div>
          </div>
          <div className="info-item">
            <FaCalendarAlt className="info-icon" />
            <div className="info-label">Total Travel Duration:</div>
            <div>{duration}</div>
          </div>
        </div>
      </div>
      <div className="fuel-toggle-container">
        <button
          className={`fuel-toggle-button ${!withFuel ? 'active' : ''}`}
          onClick={() => setWithFuel(false)}
        >
          Without Fuel
        </button>
        <button
          className={`fuel-toggle-button ${withFuel ? 'active' : ''}`}
          onClick={() => setWithFuel(true)}
        >
          With Fuel
        </button>
      </div>
      <div className="vehicle-grid">
        {vehicles.map(vehicle => (
          <div key={vehicle.id} className="vehicle-card">
            <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
            <div className="vehicle-details">
              <div className="vehicle-name">{vehicle.name}</div>
              <div className="vehicle-type">{vehicle.type}</div>
              <div className="vehicle-seating">{vehicle.seating}</div>
              <div className="vehicle-features">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="vehicle-feature">
                    <FaCogs className="feature-icon" /> {feature}
                  </div>
                ))}
              </div>
              <div className="vehicle-price">
                {withFuel ? vehicle.priceWithFuel : vehicle.priceWithoutFuel}
              </div>
              <button
                className="book-now-button"
                onClick={() => {
                  if (!isLoggedIn) {
                    navigate('/login');
                  } else {
                    navigate('/book', { state: { vehicleId: vehicle.id } });
                  }
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehiclePage;
// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import '../Css/Vehicle.css';
// import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

// const VehiclePage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const queryParams = new URLSearchParams(location.search);

//   const [pickupLocation, setPickupLocation] = useState(queryParams.get('pickup') || '');
//   const [dropoffLocation, setDropoffLocation] = useState(queryParams.get('dropoff') || '');
//   const [duration, setDuration] = useState(queryParams.get('duration') || '');
//   const [withFuel, setWithFuel] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [vehicles, setVehicles] = useState([]);

//   useEffect(() => {
//     setPickupLocation(queryParams.get('pickup') || '');
//     setDropoffLocation(queryParams.get('dropoff') || '');
//     setDuration(queryParams.get('duration') || '');

//     const userLoggedIn = Boolean(localStorage.getItem('userToken'));
//     setIsLoggedIn(userLoggedIn);

//     // Fetch vehicles from API
//     fetch('http://localhost:8080/cars/getcar') // Replace with your API endpoint
//       .then(response => response.json())
//       .then(data => {
//         setVehicles(data);
//       })
//       .catch(error => {
//         console.error('Error fetching vehicles:', error);
//       });
//   }, [location.search]);

//   return (
//     <div className="vehicle-page">
//       <div className="info-container">
//         <div className="info-grid">
//           <div className="info-item">
//             <FaMapMarkerAlt className="info-icon" />
//             <div className="info-label">Pick up Location:</div>
//             <div>{pickupLocation}</div>
//           </div>
//           <div className="info-item">
//             <FaMapMarkerAlt className="info-icon" />
//             <div className="info-label">Drop off Location:</div>
//             <div>{dropoffLocation}</div>
//           </div>
//           <div className="info-item">
//             <FaCalendarAlt className="info-icon" />
//             <div className="info-label">Total Travel Duration:</div>
//             <div>{duration}</div>
//           </div>
//         </div>
//       </div>
//       <div className="fuel-toggle-container">
//         <button
//           className={`fuel-toggle-button ${!withFuel ? 'active' : ''}`}
//           onClick={() => setWithFuel(false)}
//         >
//           Without Fuel
//         </button>
//         <button
//           className={`fuel-toggle-button ${withFuel ? 'active' : ''}`}
//           onClick={() => setWithFuel(true)}
//         >
//           With Fuel
//         </button>
//       </div>
//       <div className="vehicle-grid">
//         {vehicles.map(vehicle => (
//           <div key={vehicle.id} className="vehicle-card">
//             <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
//             <div className="vehicle-details">
//               <div className="vehicle-name">{vehicle.name}</div>
//               <div className="vehicle-type">{vehicle.type}</div>
//               <div className="vehicle-seating">{vehicle.seating}</div>
//               <div className="vehicle-price">
//                 {withFuel ? vehicle.priceWithFuel : vehicle.priceWithoutFuel}
//               </div>
//               <div className="vehicle-features">
//                 {vehicle.features.map((feature, index) => (
//                   <div key={index} className="feature-item">{feature}</div>
//                 ))}
//               </div>
//               <button className="book-now-button">Book Now</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VehiclePage;
