import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Design/EditService.css';
import NavAdmin from '../components/UI/NavAdmin';

function EditServiceForm() {
  const [serviceType, setServiceType] = useState('');
  const [description, setDescription] = useState('');
  const [charges, setCharges] = useState('');
  const [timings, setTimings] = useState('');
  const navigate = useNavigate(); // Use navigate from react-router-dom

  const handleUpdate = () => {
    // Implement logic for updating service
    console.log('Service Updated');
  };

  const handleCancel = () => {
    // Implement logic for canceling update
    console.log('Update Cancelled');
  };

  const handleBack = () => {
    navigate('/viewservice'); // Navigate to the dashboard
  };

  return (
    <>
      <NavAdmin />
      <div className="service-details-box">
        <h2>Edit Course</h2>
        <button className="back-to-dashboard" onClick={handleBack}>Back to Dashboard</button> {/* Button for navigation */}
        <div className="input-group">
          <label htmlFor="serviceType">Course Type:</label>
          <input
            type="text"
            id="serviceType"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="charges">Charges:</label>
          <input
            type="text"
            id="charges"
            value={charges}
            onChange={(e) => setCharges(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="timings">Timings:</label>
          <input
            type="text"
            id="timings"
            value={timings}
            onChange={(e) => setTimings(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </>
  );
}

export default EditServiceForm;
