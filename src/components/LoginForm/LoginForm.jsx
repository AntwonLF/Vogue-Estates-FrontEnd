import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import * as authService from '../../services/authServices'; 

import './LoginForm.css';

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [isAgent, setIsAgent] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    if (props.setMessage) {
      props.setMessage('');
    }
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'email' ? value.toLowerCase() : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = isAgent ? await authService.loginAgent(formData) : await authService.loginClient(formData);
      console.log('Login response:', response); 
      props.handleSignupOrLogin();
      navigate('/team'); 
    } catch (err) {
      console.error('Login error:', err); 
      props.setMessage(err.message);
    }
  };

  const toggleUserType = () => setIsAgent(!isAgent);


  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          autoComplete="off"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
        />
      </div>
      <div>
        <input
          type="password"
          autoComplete="off"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isAgent} onChange={toggleUserType} /> Login as Agent
        </label>
      </div>
      <div>
        <button className="glow-on-hover" type="submit">Log In</button>
      </div>
    </form>
  );
};

export default LoginForm;
