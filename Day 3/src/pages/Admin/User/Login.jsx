import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '../../../assets/Design/Login.css';
import animation1 from '../../../assets/Animations/animation1.json';
import Lottie from 'lottie-react';
import Navbar from '../../../components/UI/Navbar';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loginError] = React.useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Perform any validation if needed
    // For now, let's assume login is successful
    // Navigate to the landing page
    navigate('/landing');
  };

  return (
    <div>
      <Navbar/>
      <Lottie animationData={animation1} style={{position:'absolute',top:'15%',left:'15%',width:'700px',height:'700px'}} />
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
          </div>
          {loginError && <div className="error-message">{loginError}</div>}
          <div className="form-group">
            <button onClick={handleLogin} type="button">Login</button>
          </div>
          <div className='sign'>
            <p>Dont have an account? <Link to="/signup">Signup</Link></p> 
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
