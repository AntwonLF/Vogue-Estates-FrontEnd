// import { useState } from 'react';
// import SignupForm from '../../components/SignupForm/SignupForm';
// import LoginForm from '../../components/LoginForm/LoginForm';
// import './Landing.css';

// const Landing = ({ handleSignupOrLogin }) => {
//   const [message, setMessage] = useState('');
//   const [currentForm, setCurrentForm] = useState('login');

//   return (
//     <div className="landing-container">
//       <div className="brand-container">
//         <h1 className="brand-title">Vogue Estates</h1>
//         <p className="brand-subtitle">High Quality Homes</p>
//         <p className="brand-description">Where class meets ease</p>
//       </div>
//       {currentForm === 'login' ? (
//         <LoginForm
//           message={message}
//           setMessage={setMessage}
//           handleSignupOrLogin={handleSignupOrLogin}
//         />
//       ) : (
//         <SignupForm
//           message={message}
//           setMessage={setMessage}
//           handleSignupOrLogin={handleSignupOrLogin}
//         />
//       )}
//       <button
//         onClick={() =>
//           setCurrentForm(currentForm === 'login' ? 'signup' : 'login')
//         }
//         className="toggle-button"
//       >
//         {currentForm === 'login' ? 'Sign Up' : 'Log In'}
//       </button>
//       <div className="about-section">
//         <h2>About Us</h2>
//         <p>
//           Welcome to Vogue Estates, where we offer high-quality homes for those
//           who appreciate class and comfort. Our mission is to provide our
//           clients with the best possible living experience.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Landing;

import { useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './Landing.css';

const Landing = ({ handleSignupOrLogin }) => {
  const [message, setMessage] = useState('');
  const [currentForm, setCurrentForm] = useState('login');

  return (
    <><div className="landing-container">
          <div className="brand-container">
              <h1 className="brand-title">Vogue Estates</h1>
              <p className="brand-subtitle">High Quality Homes</p>
              <p className="brand-description">Where class meets ease</p>
          </div>
          <div className="about-section">
              <h2>About Us</h2>
              <p>Welcome to Vogue Estates, where we offer high-quality homes for those who appreciate class and comfort. Our mission is to provide our clients with the best possible living experience.</p>
          </div>
          {/* Forms moved outside of the main background container to a new section */}
      </div><div className="form-section"> {/* New wrapper for forms */}
              {currentForm === 'login' ? (
                  <LoginForm
                      message={message}
                      setMessage={setMessage}
                      handleSignupOrLogin={handleSignupOrLogin} />
              ) : (
                  <SignupForm
                      message={message}
                      setMessage={setMessage}
                      handleSignupOrLogin={handleSignupOrLogin} />
              )}
              <button
                  onClick={() => setCurrentForm(currentForm === 'login' ? 'signup' : 'login')}
                  className="toggle-button"
              >
                  {currentForm === 'login' ? 'Sign Up' : 'Log In'}
              </button>
          </div></>
  );
};

export default Landing;
