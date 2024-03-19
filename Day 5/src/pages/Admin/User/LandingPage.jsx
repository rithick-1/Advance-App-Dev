import NavbarUser from '../../../components/UI/NavbarUser'; 
import '../../../assets/Design/LandinPage.css'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram,faFacebook,faTwitter} from '@fortawesome/free-brands-svg-icons';
import img from '../../../assets/Images/yoga.jpg';
import img1 from '../../../assets/Images/img2.jpg';
import img2 from '../../../assets/Images/img3.jpg';
import img3 from '../../../assets/Images/img4.jpg';
import img4 from '../../../assets/Images/img5.jpg';
import img5 from '../../../assets/Images/img6.jpg';
import img6 from '../../../assets/Images/img7.jpg';
import img7 from '../../../assets/Images/img8.jpg';
import img8 from '../../../assets/Images/img9.jpg';
import img9 from '../../../assets/Images/img10.jpg';
import img10 from '../../../assets/Images/img11.jpg';
import img11 from '../../../assets/Images/img12.jpg';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  // Dummy data for courses
  const courses = [
    { id: 1, title: 'Hatha Yoga Fundamentals', description: 'Master the basics of Hatha yoga with foundational poses and breathing techniques.',image:img },
    { id: 2, title: 'Vinyasa Flow for Strength and Flexibility', description: 'Flow seamlessly through poses to build strength and enhance flexibility.',image:img1 },
    { id: 3, title: 'Yin Yoga for Deep Relaxation', description: 'Relax deeply and release tension with long-held, passive poses.' ,image:img2},
    { id: 4, title: 'Kundalini Yoga for Energy Awakening', description: 'Awaken your inner vitality through dynamic movements and meditation.' ,image:img3},
    { id: 5, title: 'Ashtanga Yoga Intensive', description: ' Dive into a challenging practice with a structured series of dynamic poses.',image:img4 },
    { id: 6, title: 'Restorative Yoga for Stress Relief', description: 'Find deep relaxation and rejuvenation with supported, restorative poses.' ,image:img5},
    { id: 7, title: 'Yoga Nidra for Deep Sleep and Relaxation', description: 'Induce a state of deep rest and promote better sleep with guided relaxation.' ,image:img6},
    { id: 8, title: 'Prenatal Yoga for Expectant Mothers', description: 'Support physical comfort and prepare for childbirth with safe, gentle practices.',image:img7 },
    { id: 9, title: 'Yoga for Back Pain Relief', description: 'Alleviate back pain and improve spinal health with targeted yoga techniques.',image:img8 },
    { id: 10, title: 'Yoga for Athletes: Strength and Recovery', description: 'Enhance performance and prevent injuries with yoga tailored for athletes.',image:img9 },
    { id: 11, title: 'Chair Yoga for Seniors and Limited Mobility', description: ' Experience the benefits of yoga with gentle seated and standing poses.',image:img10 },
    { id: 12, title: 'Meditation and Mindfulness for Yoga Practitioners', description: 'Deepen your practice with meditation and mindfulness techniques for inner peace.',image:img11 },
  ];

  return (
    <div>
      <NavbarUser username="User" /> {/* Pass the username as a prop */}
      <div className="courses-container">
        <h2>Available Courses</h2>
        <div className="course-list">
          {courses.map(course => (
            <div key={course.id} className="course-card">
                 <div className="course-image" style={{ backgroundImage: `url(${course.image})` }}></div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button><Link to='/userdetail'>Enroll</Link></button>
            </div>
          ))}
        </div>
      </div>

      <section id='foot'>
            <div className='foot_col'>
                <ul>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Book a class</li>
                </ul>
            </div>

            <div className='foot_col'>
                <ul>
                    <li>Private Policy</li>
                    <li>Refund Policy</li>
                    <li>Terms & Condition</li>
                </ul>
            </div>

            <div className='foot_col'>
                <ul>
                    <li>Send an E-gift</li>
                    <li>Teachers</li>
                    <li>FAQ</li>
                </ul>
            </div>

            <div className='foot_col social'>
                <ul>
                    <li><FontAwesomeIcon icon={faInstagram} /> </li>
                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                </ul>
            </div>
            </section>
            
    </div>
  );
};

export default LandingPage;
