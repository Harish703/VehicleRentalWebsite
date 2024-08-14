import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCar, FaComment, FaCalendarAlt, FaSignOutAlt, FaUsers, FaEye, FaDollarSign, FaChartPie, FaCloudSun, FaThermometerHalf, FaWind } from 'react-icons/fa';
import { Pie, Bar } from 'react-chartjs-2'; // Import the Bar component
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import './AdminDashboard.css';
import NewImage from '../Assets/TamilNadu map.jpg';

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const AdminDashboard = () => {
  const [weather, setWeather] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch weather data regularly
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=10.8505&longitude=76.2711&hourly=temperature_2m');
        const data = await response.json();
        setWeather(data.hourly.temperature_2m[0]);  // Sample weather data extraction
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
    const intervalId = setInterval(fetchWeather, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  const pieData = {
    labels: ['Coimbatore', 'Salem', 'Tirupur', 'Trichy', 'Tirunelveli', 'Thoothukudi', 'Madurai', 'Chennai'],
    datasets: [
      {
        label: 'District Selection',
        data: [10, 20, 15, 12, 8, 7, 18, 10],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6347',
          '#36EB98',
          '#A236EB',
          '#56FFCE',
          '#EB36A2',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Prepare labels for Pie Chart
  const pieLabels = pieData.labels.map((label, index) => (
    <div key={label} className="label-item">
      <div
        className="label-color-box"
        style={{ backgroundColor: pieData.datasets[0].backgroundColor[index] }}
      ></div>
      <div className="label-text">{label}</div>
    </div>
  ));

  // Define barData and barOptions for the Bar chart
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Monthly Earnings',
        data: [5000, 7000, 6000, 8000, 7500, 7000, 9000, 8500, 8000, 9500, 10000, 11000],
        backgroundColor: '#36A2EB',
        borderRadius: 5,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  // Navigation handlers
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="admin-dashboard">
      <nav className="admin-nav">
        <h2>Admin Dashboard</h2>
        <ul>
          <li>
            <button onClick={() => handleNavigation('/admin/vehicle-management')}>
              <FaCar className="icon" /> Vehicle Management
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/admin/user-reviews')}>
              <FaComment className="icon" /> User & Reviews
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/admin/booking-reservation')}>
              <FaCalendarAlt className="icon" /> Booking & Reservation
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/logout')}>
              <FaSignOutAlt className="icon" /> Logout
            </button>
          </li>
        </ul>
      </nav>

      <main className="admin-main">
        <h1></h1>

        <div className="dashboard-content">
          <div className="stats">
            <div className="stat">
              <FaUsers className="icon" />
              <h3>Total Visits</h3>
              <p>1,234</p>
            </div>
            <div className="stat">
              <FaEye className="icon" />
              <h3>Total Page Views</h3>
              <p>567</p>
            </div>
            <div className="stat">
              <FaDollarSign className="icon" />
              <h3>Profits</h3>
              <p>$12,345</p>
            </div>
            <div className="stat">
              <FaChartPie className="icon" />
              <h3>Bounce Rate</h3>
              <p>33%</p>
            </div>
            <div className="stat weather-column">
              <FaCloudSun className="icon" />
              <h3>Weather</h3>
              {weather ? (
                <div className="weather-details">
                  <p><FaThermometerHalf className="weather-icon" /> Temperature: {weather}°C</p>
                  <p><FaWind className="weather-icon" /> Wind Speed: 15 km/h</p>
                </div>
              ) : (
                <p>Loading weather data...</p>
              )}
            </div>
          </div>

          <div className="image-weather-chart-section">
            <div className="image-section">
              <img src={NewImage} alt="New Dashboard Image" className="dashboard-image" />
            </div>

            <div className="chart-section">
              <div className="chart-container">
                <Pie data={pieData} options={pieOptions} />
              </div>
              <div className="labels-container">
                {pieLabels}
              </div>
            </div>
          </div>

          <div className="sales-report-section">
            <h2>Sales Report</h2>
            <div className="sales-grid">
              <div className="sales-item">
                <h4>January</h4>
                <p>$0.00</p>
              </div>
              <div className="sales-item">
                <h4>February</h4>
                <p>$0.00</p>
              </div>
              <div className="sales-item">
                <h4>March</h4>
                <p>$0.00</p>
              </div>
              <div className="sales-item">
                <h4>April</h4>
                <p>$0.00</p>
              </div>
              <div className="sales-item">
                <h4>May</h4>
                <p>$0.00</p>
              </div>
              <div className="sales-item">
                <h4>June</h4>
                <p>$0.00</p>
              </div>
              <div className="sales-item">
                <h4>July</h4>
                <p>$0.00</p>
              </div>
              <div className="sales-item">
                <h4>August</h4>
                <p>$0.00</p>
              </div>
              <div className="sales-item">
                <h4>September</h4>
                <p>$0.00</p>
              </div>
              <div className="sales-item">
                <h4>October</h4>
                <p>$0.00</p>
              </div>
              <div className="sales-item">
                <h4>November</h4>
                <p>$0.00</p>
              </div>
              <div className="sales-item">
                <h4>December</h4>
                <p>$0.00</p>
              </div>
            </div>
          </div>

          <div className="profit-graph-section">
            <div className="monthly-profits-graph">
              <h2>Monthly Profits</h2>
              <Bar data={barData} options={barOptions} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
