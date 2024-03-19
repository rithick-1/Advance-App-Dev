
import { useNavigate } from 'react-router-dom';
import '../assets/Design/AdminDash.css';
import NavAdmin from '../components/UI/NavAdmin';

function AdminDashboard() {
    const nav = useNavigate();
  const handleAddService = () => {
    // Add logic for handling Add Service button click
    nav("/addservice")
    console.log('Add Service button clicked');
  };

  const handleViewService = () => {
    // Add logic for handling View Service button click
    nav("/viewservice")
    console.log('View Service button clicked');
  };

  const handleAllBooking = () => {
    // Add logic for handling All Booking button click
    nav("/allbook")
    console.log('All Booking button clicked');
  };

  const handlePaymentHistory = () => {
    // Add logic for handling Payment History button click
    nav("/payhistory");
    console.log('Payment History button clicked');
  };

  return (
    <>
            <NavAdmin/>
    <div className="admin-dashboard-container">
      <div className="box" onClick={handleAddService}>
        <h3>Add Course</h3>
      </div>
      <div className="box" onClick={handleViewService}>
        <h3>View Course</h3>
      </div>
      <div className="box" onClick={handleAllBooking}>
        <h3>All Booking</h3>
      </div>
      <div className="box" onClick={handlePaymentHistory}>
        <h3>Payment History</h3>
      </div>
    </div>
    </>
  );
}

export default AdminDashboard;
