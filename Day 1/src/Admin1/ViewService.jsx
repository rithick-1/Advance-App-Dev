
import { useNavigate } from 'react-router-dom';
import '../assets/Design/ViewService.css'; // Import CSS file for styling
import NavAdmin from '../components/UI/NavAdmin';


function Viewservices1() {
  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this service?');
    if (confirmDelete) {
      // Implement logic for deleting service
      console.log('Service deleted');
    }
  };
  const nav = useNavigate();
const handleBack =() =>{
  nav("/Admindash");
}
const handleEdit = () =>{
  nav("/editService")
}
  return (
    <>
     <NavAdmin/>
    <div className="view-services-container"><div className='reegan1'>
      View Course
    </div>
      <div className="search-box">
        <input type="text" placeholder="Search service..." />
        <button>Search</button>
      </div>
      <div className="service-details">
        <div>
          <label>Course ID:</label>
          <span>1</span>
        </div>
        <div>
          <label>Course Type:</label>
          <span>Full-time</span>
        </div>
        <div>
          <label>Description:</label>
          <span>Very usefull for beginners</span>
        </div>
        <div>
          <label>Charges:</label>
          <span>$1253</span>
        </div>
        <div>
          <label>Timing:</label>
          <span>8 am to 10 pm</span>
        </div>
        <div className="buttons">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <button onClick={handleBack} className="back-to-dashboard-button">Back to Dashboard</button>
    </div>
    </>
  );
}

export default Viewservices1;
