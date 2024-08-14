import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Admin/VehicleManagement.css';
import { FaCar, FaSave, FaEdit, FaTrash } from 'react-icons/fa';

const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState([]);
  const [editVehicle, setEditVehicle] = useState(null);
  const [newVehicle, setNewVehicle] = useState({ name: '', type: '', seating: '', priceWithoutFuel: '', priceWithFuel: '', features: [], image: '' });

  // Fetch vehicles from the backend when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8080/cars/getcar')
      .then(response => {
        setVehicles(response.data);
      })
      .catch(error => {
        console.error('Error fetching vehicles:', error);
      });
  }, []);

  const handleAddVehicle = () => {
    if (Object.values(newVehicle).some(field => field === '')) {
      alert('Please fill in all fields');
      return;
    }

    axios.post('http://localhost:8080/cars/addcar', newVehicle)
      .then(response => {
        setVehicles([...vehicles, response.data]);
        setNewVehicle({ name: '', type: '', seating: '', priceWithoutFuel: '', priceWithFuel: '', features: [], image: '' });
      })
      .catch(error => {
        console.error('Error adding vehicle:', error);
      });
  };

  const handleUpdateVehicle = (id) => {
    axios.put(`http://localhost:8080/cars/update/${id}`, editVehicle)
      .then(() => {
        const updatedVehicles = vehicles.map(vehicle =>
          vehicle.id === id ? editVehicle : vehicle
        );
        setVehicles(updatedVehicles);
        setEditVehicle(null);
      })
      .catch(error => {
        console.error('Error updating vehicle:', error);
      });
  };

  const handleDeleteVehicle = (id) => {
    axios.delete(`http://localhost:8080/cars/delete/${id}`)
      .then(() => {
        setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
      })
      .catch(error => {
        console.error('Error deleting vehicle:', error);
      });
  };

  return (
    <div className="vehicle-management-container">
      <div className="form-container">
        <h2>Add New Vehicle</h2>
        <input
          type="text"
          placeholder="Vehicle Name"
          value={newVehicle.name}
          onChange={(e) => setNewVehicle({ ...newVehicle, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Type"
          value={newVehicle.type}
          onChange={(e) => setNewVehicle({ ...newVehicle, type: e.target.value })}
        />
        <input
          type="text"
          placeholder="Seating"
          value={newVehicle.seating}
          onChange={(e) => setNewVehicle({ ...newVehicle, seating: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price Without Fuel"
          value={newVehicle.priceWithoutFuel}
          onChange={(e) => setNewVehicle({ ...newVehicle, priceWithoutFuel: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price With Fuel"
          value={newVehicle.priceWithFuel}
          onChange={(e) => setNewVehicle({ ...newVehicle, priceWithFuel: e.target.value })}
        />
        <textarea
          placeholder="Features (comma-separated)"
          value={newVehicle.features.join(', ')}
          onChange={(e) => setNewVehicle({ ...newVehicle, features: e.target.value.split(',').map(f => f.trim()) })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newVehicle.image}
          onChange={(e) => setNewVehicle({ ...newVehicle, image: e.target.value })}
        />
        <button className="save-button" onClick={handleAddVehicle}>
          <FaSave /> Save
        </button>
      </div>

      <div className="manage-vehicles-container">
        <h2>Manage Vehicles</h2>
        <div className="vehicle-row">
          {vehicles.map(vehicle => (
            <div key={vehicle.id} className="vehicle-card">
              <img src={vehicle.image || 'default-image.jpg'} alt={vehicle.name} className="vehicle-image" />
              {editVehicle && editVehicle.id === vehicle.id ? (
                <div className="edit-form">
                  <h3>Edit Vehicle</h3>
                  <input
                    type="text"
                    placeholder="Vehicle Name"
                    value={editVehicle.name}
                    onChange={(e) => setEditVehicle({ ...editVehicle, name: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Type"
                    value={editVehicle.type}
                    onChange={(e) => setEditVehicle({ ...editVehicle, type: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Seating"
                    value={editVehicle.seating}
                    onChange={(e) => setEditVehicle({ ...editVehicle, seating: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Price Without Fuel"
                    value={editVehicle.priceWithoutFuel}
                    onChange={(e) => setEditVehicle({ ...editVehicle, priceWithoutFuel: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Price With Fuel"
                    value={editVehicle.priceWithFuel}
                    onChange={(e) => setEditVehicle({ ...editVehicle, priceWithFuel: e.target.value })}
                  />
                  <textarea
                    placeholder="Features (comma-separated)"
                    value={editVehicle.features.join(', ')}
                    onChange={(e) => setEditVehicle({ ...editVehicle, features: e.target.value.split(',').map(f => f.trim()) })}
                  />
                  <button className="save-changes-button" onClick={() => handleUpdateVehicle(vehicle.id)}>
                    <FaSave /> Save Changes
                  </button>
                </div>
              ) : (
                <div className="vehicle-details">
                  <h3>{vehicle.name}</h3>
                  <p><strong>Type:</strong> {vehicle.type}</p>
                  <p><strong>Seating:</strong> {vehicle.seating}</p>
                  <p><strong>Price Without Fuel:</strong> ${vehicle.priceWithoutFuel}</p>
                  <p><strong>Price With Fuel:</strong> ${vehicle.priceWithFuel}</p>
                  <p><strong>Features:</strong> {vehicle.features.join(', ')}</p>
                  <button className="edit-button" onClick={() => setEditVehicle(vehicle)}>
                    <FaEdit /> Edit
                  </button>
                  <button className="delete-button" onClick={() => handleDeleteVehicle(vehicle.id)}>
                    <FaTrash /> Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleManagement;
