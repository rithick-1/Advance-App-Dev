import  { useState } from 'react';
import '../assets/Design/AddService.css';
import { useNavigate } from 'react-router-dom';
import NavAdmin from '../components/UI/NavAdmin';
function AddService() {
  const [serviceType, setServiceType] = useState('');
  const [description, setDescription] = useState('');
  const [charges, setCharges] = useState('');
  const [timing, setTiming] = useState('');

  const handleAddService = () => {
    // Logic for adding the service
    console.log('Adding service:', { serviceType, description, charges, timing });
  };
const nav = useNavigate();
  const handleBackToDashboard = () => {
    // Logic for navigating back to the dashboard
    nav("/Admindash")
    console.log('Navigating back to dashboard');
  };

  return (
    <>
     <NavAdmin/>
    <div className="add-service-container">
      <h2>Add Course</h2>
      <div className="form-group">
        <label htmlFor="serviceType">Course Type:</label>
        <input
          type="text"
          id="serviceType"
          placeholder="Enter service type"
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="charges">Charges:</label>
        <input
          type="text"
          id="charges"
          placeholder="Enter charges"
          value={charges}
          onChange={(e) => setCharges(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="timing">Timing:</label>
        <input
          type="text"
          id="timing"
          placeholder="Enter timing"
          value={timing}
          onChange={(e) => setTiming(e.target.value)}
          required
        />
      </div>
      <div className="buttons">
        <button className="add-service-button" onClick={handleAddService}>Add Service</button>
        <button className="back-to-dashboard-button" onClick={handleBackToDashboard}>Back to Dashboard</button>
      </div>
    </div>
    </>
  );
}

export default AddService;
