import { useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './Landing.css';

const Landing = ({ handleSignupOrLogin }) => {
  const [message, setMessage] = useState('');
  const [currentForm, setCurrentForm] = useState('login');

  return (
    <div className="landing-container" style={{ backgroundImage: `url('../../assets/10_miami_914_690.jpg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
      <div className="brand-container">
        <h1 className="brand-title">Vogue Estateś</h1>
        <p className="brand-subtitle">Where luxury meets realty</p>
      </div>
      <div className="about-section">
        <h2>About Us</h2>
        <p>Welcome to Vogue Estates, the epitome of high-quality living where sophistication meets comfort in perfect harmony. Our exclusive properties are designed for those who seek more than just a home but a place where every detail reflects class and luxury. At Vogue Estates, we don't just build houses; we craft environments that enhance your lifestyle, creating spaces where memories are made and cherished. Our dedicated team works tirelessly to ensure that from the moment you step through our doors, you're not just a client but a valued member of the Vogue Estates family. Our mission, our passion, is to deliver an unparalleled living experience that caters to your every need, ensuring that your home is a sanctuary of peace and elegance.</p>
      </div>
      {/* Forms moved outside of the main background container to a new section */}
      <div className="form-section"> {/* New wrapper for forms */}
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
        <button
          onClick={() => setCurrentForm(currentForm === 'login' ? 'signup' : 'login')}
          className="toggle-button"
        >
          {currentForm === 'login' ? 'Sign Up' : 'Log In'}
        </button>
      </div>
    </div>
  );
};

export default Landing;