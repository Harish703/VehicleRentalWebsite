// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { FaUser, FaEnvelope, FaBirthdayCake, FaUpload, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
// import axios from 'axios'; 
// import '../Css/Register.css';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     address: '',
//     dateOfBirth: '',
//     email: '',
//     firstName: '',
//     lastName: '',
//     licenseId: '',
//     mobileNumber: '',
//   });

//   const [acceptedTerms, setAcceptedTerms] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
//     if (!isLoggedIn) {
//       navigate('/login');
//     }
//   }, [navigate]);

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
//     });
//   };

//   const validateForm = () => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phonePattern = /^[0-9]{10}$/;

//     if (!emailPattern.test(formData.email)) {
//       setError('Invalid email format.');
//       return false;
//     }

//     if (!phonePattern.test(formData.mobileNumber)) {
//       setError('Invalid phone number format. It should be 10 digits.');
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!acceptedTerms) {
//       alert('You must accept the terms and conditions to proceed.');
//       return;
//     }

//     if (!validateForm()) return;

//     const formDataToSend = new FormData();
//     formDataToSend.append('first_name', formData.firstName);
//     formDataToSend.append('last_name', formData.lastName);
//     formDataToSend.append('email', formData.email);
//     formDataToSend.append('mobile_number', formData.mobileNumber);
//     formDataToSend.append('date_of_birth', formData.dateOfBirth);
//     formDataToSend.append('address', formData.address);
//     formDataToSend.append('lisenseId', formData.licenseId);
  

//     setLoading(true);
//     setError(null);

//     try {
//       // Log form data for debugging
//       console.log('FormData being sent:', formDataToSend);

//       await axios.post('http://localhost:8080/api/postregister', formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       // Redirect to payment page on successful registration
//       navigate('/payment');
//     } catch (err) {
//       console.error('Registration error:', err);

//       // Set error message from response or default message
//       setError(err.response?.data?.message || 'Registration failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFileSelect = () => {
//     document.getElementById('licenseImage').click();
//   };

//   return (
//     <div className="register-page">
//       <div className="register-container">
//         <h2>Register Here</h2>
//         <p>Join Rent 'N Roll and enjoy exclusive offers and smooth rides!</p>
//         <form onSubmit={handleSubmit} className="register-form">
//           <div className="form-group">
//             <label htmlFor="firstName" className="label">First Name</label>
//             <div className="input-container">
//               <FaUser className="input-icon" />
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter your first name"
//               />
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="lastName" className="label">Last Name</label>
//             <div className="input-container">
//               <FaUser className="input-icon" />
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter your last name"
//               />
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="email" className="label">Email</label>
//             <div className="input-container">
//               <FaEnvelope className="input-icon" />
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter your email"
//               />
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="mobileNumber" className="label">Mobile Number</label>
//             <div className="input-container">
//               <FaPhone className="input-icon" />
//               <input
//                 type="tel"
//                 id="mobileNumber"
//                 name="mobileNumber"
//                 value={formData.mobileNumber}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter your mobile number"
//               />
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="dateOfBirth" className="label">Date of Birth</label>
//             <div className="input-container">
//               <FaBirthdayCake className="input-icon" />
//               <input
//                 type="date"
//                 id="dateOfBirth"
//                 name="dateOfBirth"
//                 value={formData.dateOfBirth}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="address" className="label">Address</label>
//             <div className="input-container">
//               <FaMapMarkerAlt className="input-icon" />
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter your address"
//               />
//             </div>
//           </div>
//           <div className="form-group">
//   <label htmlFor="licenseId" className="label">License ID</label>
//   <div className="input-container">
//     {/* <FaIdCard className="input-icon" /> You can use any icon that represents an ID */}
//     <input
//       type="text"
//       id="licenseId"
//       name="licenseId"
//       value={formData.licenseId || ''} // Initialize with empty string if undefined
//       onChange={handleChange}
//       required
//       placeholder="Enter your license ID"
//     />
//   </div>
// </div>

//           <div className="checkbox-container">
//             <input
//               type="checkbox"
//               id="acceptTerms"
//               name="acceptTerms"
//               checked={acceptedTerms}
//               onChange={(e) => setAcceptedTerms(e.target.checked)}
//             />
//             <label htmlFor="acceptTerms">
//               I am 18 years old and accept the <a href="/terms" className="terms-link">terms and conditions</a>
//             </label>
//           </div>
//           <button type="submit" className="register-button" disabled={loading}>
//             {loading ? 'Registering...' : 'Register'}
//           </button>
//         </form>
//         {error && <p className="error-message">{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaBirthdayCake, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios'; 
import '../Css/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    address: '',
    dateOfBirth: '',
    email: '',
    firstName: '',
    lastName: '',
    licenseId: '', 
    mobileNumber: '',
  });

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!emailPattern.test(formData.email)) {
      setError('Invalid email format.');
      return false;
    }

    if (!phonePattern.test(formData.mobileNumber)) {
      setError('Invalid phone number format. It should be 10 digits.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert('You must accept the terms and conditions to proceed.');
      return;
    }

    if (!validateForm()) return;

    const formDataToSend = new FormData();
formDataToSend.append('firstName', formData.firstName);
formDataToSend.append('lastName', formData.lastName);
formDataToSend.append('email', formData.email);
formDataToSend.append('mobileNumber', formData.mobileNumber);
formDataToSend.append('dateOfBirth', formData.dateOfBirth);
formDataToSend.append('address', formData.address);
formDataToSend.append('licenseId', formData.licenseId);


    setLoading(true);
    setError(null);

    try {
      // console.log('FormData being sent:', formDataToSend);
 const respose=await axios.post('http://localhost:8080/api/postregister', formDataToSend);


      navigate('/payment');
    } catch (err) {
      console.error('Registration error:', err);

      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Register Here</h2>
        <p>Join Rent 'N Roll and enjoy exclusive offers and smooth rides!</p>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="firstName" className="label">First Name</label>
            <div className="input-container">
              <FaUser className="input-icon" />
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Enter your first name"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="label">Last Name</label>
            <div className="input-container">
              <FaUser className="input-icon" />
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="label">Email</label>
            <div className="input-container">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber" className="label">Mobile Number</label>
            <div className="input-container">
              <FaPhone className="input-icon" />
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                placeholder="Enter your mobile number"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth" className="label">Date of Birth</label>
            <div className="input-container">
              <FaBirthdayCake className="input-icon" />
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address" className="label">Address</label>
            <div className="input-container">
              <FaMapMarkerAlt className="input-icon" />
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Enter your address"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="licenseId" className="label">License ID</label>
            <div className="input-container">
              {/* <FaIdCard className="input-icon" /> You can use any icon that represents an ID */}
              <input
                type="text"
                id="licenseId"
                name="licenseId"
                value={formData.licenseId || ''} // Initialize with empty string if undefined
                onChange={handleChange}
                required
                placeholder="Enter your license ID"
              />
            </div>
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            <label htmlFor="acceptTerms">
              I am 18 years old and accept the <a href="/terms" className="terms-link">terms and conditions</a>
            </label>
          </div>
          <button type="submit" className="register-button" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Register;
