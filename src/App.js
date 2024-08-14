import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/NavigationBar';
import Home from './Pages/Home';
import Vehicles from './Pages/Vehicles';
import Bookings from './Pages/Booking';
import About from './Pages/About';
import Login from './Pages/LogIn';
import Signup from './Pages/SignUp';
import Review from './Pages/Review';
import Register from './Pages/Register';
import PaymentPage from './Pages/Payment';
import ForgotPassword from './Pages/LogForgotpass';
import AdminDashboard from './Components/Admin/AdminDashboard';
import VehicleManagement from './Components/Admin/VehicleManagement';
import UserReviews from './Components/Admin/UserReviews';
import BookingReservations from './Components/Admin/BookingReservations';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const isAdmin = () => {
    const email = localStorage.getItem('email');
    return email === 'ronniejr@gmail.com';
  };

  return (
    <Router>
      <RoutesWrapper isAdmin={isAdmin} />
    </Router>
  );
}

function RoutesWrapper({ isAdmin }) {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPath && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/review" element={<Review />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={isAdmin() ? <AdminDashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/vehicle-management"
          element={isAdmin() ? <VehicleManagement /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/booking-reservation"
          element={isAdmin() ? <BookingReservations /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/user-reviews"
          element={isAdmin() ? <UserReviews /> : <Navigate to="/login" />}
        />

        {/* Redirect to home for unknown paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
