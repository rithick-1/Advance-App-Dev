import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '../assets/Design/Login.css';
import NavAdmin from '../components/UI/NavAdmin';
import Lottie from 'lottie-react';
import admin from '../assets/Animations/admin.json';


const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loginError,setLoginError] = React.useState('');
  const nav=useNavigate();
 

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    
    if (username === 'admin@gmail.com' && password === 'password123') {
      console.log('Login successful');
      nav('/admindash');
      
    } else {
      setLoginError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
        <NavAdmin/>
        <Lottie style={{width:'600px',height:'600px',position:'absolute',top:'20%',left:'10%'}} animationData={admin}></Lottie>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
            <button type="submit"><Link to='/landing'>Login</Link></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
