import { useState, useCallback, useRef, useEffect } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './Landing.css'; 
import { useTransition, animated } from '@react-spring/web'

const Landing = ({ handleSignupOrLogin }) => {
  const [message, setMessage] = useState('');
  const [currentForm, setCurrentForm] = useState('login');
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      color: 'black',
    },
    enter: [
        { opacity: 1, height: 150, innerHeight: 90 },
      ],
      leave: [{ color: 'black' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    })

    const reset = useCallback(() => {
        ref.current.forEach(clearTimeout)
        ref.current = []
        set([])
        ref.current.push(setTimeout(() => set([<h1 className="brand-title">Vogue Estateś</h1>,
        <p className="brand-subtitle">Where luxury meets realty</p>]), 1000))
      }, [])
    
      useEffect(() => {
        reset()
        return () => ref.current.forEach(clearTimeout)
      }, [])

  return (
    <div className="landing-container">
      <div className="brand-container">
      <div className="container">
      <div className="main">
        {transitions(({ innerHeight, ...rest }, item) => (
            <animated.div className="transitionsItem" style={rest} >
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
        {/* <h1 className="brand-title">Vogue Estateś</h1> */}
        {/* <p className="brand-subtitle">Where luxury meets realty</p> */}
      </div>
      <div className="about-section">
        <h2>About Us</h2>
        <p>Welcome to Vogue Estates, the epitome of high-quality living where sophistication meets comfort in perfect harmony. Our exclusive properties are designed for those who seek more than just a home but a place where every detail reflects class and luxury. At Vogue Estates, we don't just build houses; we craft environments that enhance your lifestyle, creating spaces where memories are made and cherished.</p>

        <p>In the heart of Miami's vibrant real estate landscape, Vogue Estates stands out with its unique blend of modern luxury and tropical charm. Our properties in Miami are more than just homes; they are gateways to a lifestyle embraced by sun, sea, and cultural richness. Each estate is carefully designed to harmonize with Miami's dynamic and scenic beauty, offering you an oasis in the midst of the city's lively rhythm.</p>

        <p>Our dedicated team works tirelessly to ensure that from the moment you step through our doors, you're not just a client but a valued member of the Vogue Estates family. Our mission, our passion, is to deliver an unparalleled living experience that caters to your every need, ensuring that your home in Miami is not just a sanctuary of peace and elegance, but also a reflection of the city's vibrant spirit.</p>
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