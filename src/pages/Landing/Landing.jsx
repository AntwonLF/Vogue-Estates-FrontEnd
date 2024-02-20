import { useState, useCallback, useRef, useEffect } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './Landing.css';
import { useTransition, animated } from '@react-spring/web'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Landing = ({ handleSignupOrLogin, onFormSectionMounted }) => {
  const [message, setMessage] = useState('');
  const [currentForm, setCurrentForm] = useState('login');
  const formSectionRef = useRef(null)
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, {
    from: { opacity: 0, height: 0, innerHeight: 0, color: 'black' },
    enter: [{ opacity: 1, height: 120, innerHeight: 90 }],
    leave: [{ color: 'black' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    config: { duration: 1000, tension: 270, friction: 26 }
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set([<h1 className="brand-title">Vogue Estateś</h1>,
    <p className="brand-subtitle">Where luxury meets realty</p>]), 10))
  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    if (formSectionRef.current) {
      onFormSectionMounted(formSectionRef.current);
    }
  }, [formSectionRef, onFormSectionMounted]);

  const isAppleDevice = () => {
    return /Mac|iPhone|iPad|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  };

  const handleEmojiClick = () => {
    if (isAppleDevice()) {
      window.location.href = 'facetime://email@example.com';
    } else {
      alert('FaceTime is only available on Apple devices.');
    }
  };

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
          <button id="faceEmojiButton" onClick={handleEmojiClick} className="face-emoji-button">Chat With Us</button>
        </div>
      
      </div>
      <div className="about-section">
        <h2>About Us</h2>
        <p>Welcome to Vogue Estates, the epitome of high-quality living where sophistication meets comfort in perfect harmony. Our exclusive properties are designed for those who seek more than just a home but a place where every detail reflects class and luxury. At Vogue Estates, we don't just build houses; we craft environments that enhance your lifestyle, creating spaces where memories are made and cherished.</p>

        <p>In the heart of Miami's vibrant real estate landscape, Vogue Estates stands out with its unique blend of modern luxury and tropical charm. Our properties in Miami are more than just homes; they are gateways to a lifestyle embraced by sun, sea, and cultural richness. Each estate is carefully designed to harmonize with Miami's dynamic and scenic beauty, offering you an oasis in the midst of the city's lively rhythm.</p>

        <p>Our dedicated team works tirelessly to ensure that from the moment you step through our doors, you're not just a client but a valued member of the Vogue Estates family. Our mission, our passion, is to deliver an unparalleled living experience that caters to your every need, ensuring that your home in Miami is not just a sanctuary of peace and elegance, but also a reflection of the city's vibrant spirit.</p>
      </div>
      <div className="explore-section">
        <h2>Explore Miami</h2>
        <p>Miami is renowned for its opulent lifestyle, offering a plethora of luxury living options that cater to the most discerning individuals. From extravagant waterfront mansions with stunning views of the Atlantic Ocean to sleek high-rise condominiums adorned with state-of-the-art amenities, Miami's real estate market epitomizes luxury living. Residents indulge in lavish amenities such as private pools, personal spas, and exclusive concierge services, elevating their lifestyle to unparalleled heights. Whether nestled in the vibrant urban landscape of downtown Miami or along the serene shores of Miami Beach, luxury living in Miami is synonymous with sophistication and extravagance.</p>

        <p>When it comes to dining, Miami boasts a thriving culinary scene that tantalizes the taste buds of even the most seasoned food connoisseurs. The city is home to an array of Michelin-starred restaurants, celebrity-chef-owned establishments, and chic eateries offering innovative gastronomic experiences. From savoring delectable seafood delights at upscale waterfront bistros to indulging in exquisite steak dinners at world-class steakhouses, Miami's luxurious dining options cater to every palate and preference. With a fusion of international cuisines and locally sourced ingredients, dining in Miami is not just a meal but a lavish culinary journey that leaves a lasting impression.</p>

        <p>In addition to its luxurious living and dining offerings, Miami is also a paradise for those seeking upscale shopping experiences. The city boasts an impressive array of high-end boutiques, designer flagship stores, and upscale shopping centers that cater to the elite shopper. From the iconic Bal Harbour Shops, featuring prestigious luxury brands like Chanel, Gucci, and Prada, to the upscale shopping districts of Lincoln Road and the Design District, Miami offers a world-class shopping experience that rivals any global fashion capital. With its blend of luxury living, fine dining, and upscale shopping, Miami stands as a beacon of extravagance and refinement, enticing visitors and residents alike to indulge in the lap of luxury.</p>
      </div>

      <div className="Mycarousel-container">
        <Slider
          dots={true}
          arrows={true}
          infinite={true}
          speed={500}
          slidesToShow={4} // Adjust this value to control the number of images shown at once
          slidesToScroll={1}
        >
          <div>
            <img src="https://i.imgur.com/V2ewfci.jpeg" alt="carousel-img-1" />
          </div>
          <div>
            <img src="https://i.imgur.com/5b1gUTn.jpeg" alt="carousel-img-2" />
          </div>
          <div>
            <img src="https://i.imgur.com/48xynj0.jpeg" alt="carousel-img-3" />
          </div>
          <div>
            <img src="https://i.imgur.com/aRzcmmn.jpeg" alt="carousel-img-4" />
          </div>
          <div>
            <img src="https://i.imgur.com/8rgBvkO.jpeg" alt="carousel-img-5" />
          </div>
        </Slider>
      </div>



      {/* Forms moved outside of the main background container to a new section */}
      <div ref={formSectionRef} className="form-section"> {/* New wrapper for forms */}
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