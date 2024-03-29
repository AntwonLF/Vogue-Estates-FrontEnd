import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Location from './pages/Location/Location';
import Team from './pages/Team/Team';
import Listing from './pages/Listing/Listing';
import Landing from './pages/Landing/Landing';
import ListingDetails from './pages/ListingDetails/ListingDetails';
import * as authService from './services/authServices';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const user = authService.getCurrentUser();
    setUser(user);
  }, []);

  const handleSignupOrLogin = () => {
    const user = authService.getCurrentUser();
    setUser(user);
  };

  const handleSignout = () => {
    authService.logoutUser();
    setUser(null);
    navigate('/'); 
  };

  const [formSectionRef, setFormSectionRef] =useState(null);

  const handleFormSectionRef = (ref) => {
    setFormSectionRef(ref);
  };

  return (
    <>
      <NavBar formSectionRef={formSectionRef} user={user} handleSignout={handleSignout} />
      <Routes>
        <Route path='/'  element={<Landing handleSignupOrLogin={handleSignupOrLogin} onFormSectionMounted={handleFormSectionRef}/>} />
        <Route path="/location" element={<Location />} />
        <Route path="/team" element={<Team />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
      </Routes>
    </>
  );
}

export default App;