import { Link } from 'react-router-dom';
import '../../assets/Design/NavbarUser.css';

const NavAdmin = () => {
  return (
    <div>

<section className="navbar-user">
      <h1>Moksha Yoga Academy</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/adminlogin">Logout</Link></li>
      </ul>
    </section>

    </div>
  )
}

export default NavAdmin