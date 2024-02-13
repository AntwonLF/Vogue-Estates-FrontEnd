import { useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import LoginForm from '../../components/LoginForm/LoginForm';


import './Landing.css'

const Landing = ({ handleSignupOrLogin }) => {
  const [message, setMessage] = useState('');
  const [currentForm, setcurrentForm] = useState('login');

  return (
    <div className="landing-container">
      <div className="brand-container">
        <h1 className="brand-title">Vogue Estates</h1>
        <p className="brand-subtitle">High </p>
        <p className="brand-description">
          Vogue Estates will find YOU a home
        </p>
      </div>
      {currentForm === 'login' ? (
        <LoginForm
          message={message}
          setMessage={setMessage}
          handleSignupOrLogin={handleSignupOrLogin}
        />
      ) : (
        <SignupForm
          message={message}
          setMessage={setMessage}
          handleSignupOrLogin={handleSignupOrLogin}
        />
      )}
      <button onClick={() => setcurrentForm(currentForm === 'login' ? 'signup' : 'login')} className="toggle-button">
        {currentForm === 'login' ? 'Sign Up' : 'Log In'}
      </button>
    </div>
  );
};

export default Landing

//needs to include signin and login 
//button functionality in singup form and login form