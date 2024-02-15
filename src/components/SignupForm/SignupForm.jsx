import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import * as authService from '../../services/authServices';

const SignupForm = props => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    isAgent: false,
    licenseNumber: '',
    name: 'name name',
  });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (props.setMessage) {
      props.setMessage('');
    }
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : (name === 'email' ? value.toLowerCase() : value),
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData)
    try {
      if (formData.isAgent) {
        const agentData = {
          username: formData.username,
          email: formData.email, 
          password: formData.password,
          license: formData.licenseNumber,
        };
        await authService.signupAgent(agentData);
      } else {
        const userData = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        };
        await authService.signup(userData);
      }
      props.handleSignupOrLogin();
      navigate('/team');
    } catch (err) {
      props.setMessage(err.message);
    }
  };

  const { username, email, password, isAgent, licenseNumber } = formData;

  const isFormInvalid = () => {
    if (isAgent) {
      return !(username && email && password && licenseNumber);
    } else {
      return !(username && email && password);
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className='SignupForm'>
      <div className='inputContainer'>
        <input
          type="text"
          name="username"
          autoComplete='off'
          value={formData.username || ''}
          onChange={handleChange}
          placeholder="Username"
          id='username'
        />
      </div>
      <div className='inputContainer'>
        <input
          type="text"
          name="email"
          autoComplete='off'
          value={formData.email || ''}
          onChange={handleChange}
          placeholder="Email"
          id='email'
        />
      </div>
      <div className='inputContainer'>
        <input
          type="password"
          name="password"
          autoComplete='off'
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          id='password'
        />
      </div>
      <div className='inputContainer'>
        <label>
          <input
            type="checkbox"
            name="isAgent"
            checked={formData.isAgent}
            onChange={handleChange}
          /> Sign up as an agent
        </label>
      </div>
      {formData.isAgent && (
        <div className='inputContainer'>
          <input
            type="text"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleChange}
            placeholder="License Number"
            id='licenseNumber'
          />
        </div>
      )}
      <div className='signupbutton'>
        <button disabled={isFormInvalid()}>
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
