import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar'
import Location from './pages/Location/Location'
import Team from './pages/Team/Team'
import Listing from './pages/Listing/Listing'
import Landing from './pages/Landing/Landing'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ListingDetails from './pages/ListingDetails/ListingDetails'; 




function App() {
  // const navigate = useNavigate();
  // const [user, setUser] = useState(authService.getUser());

  function handleSignout() {
    authService.logout();
    // setUser(null);
  }

  return (
    <>
      {/* <NavBar user={user} handleSignout={handleSignout} /> */}
      <NavBar handleSignout={handleSignout} />
      <Routes>
        {/* <Route path="/" element={<Landing handleSignupOrLogin={handleSignupOrLogin} />} /> */}
        <Route path='/' element={<Landing />} />
        <Route path="/location" element={<Location />} />
        <Route path="/team" element={<Team />} />
        <Route path="/listing" element={
          // <ProtectedRoute user={user}>
            <Listing />
          // </ProtectedRoute>
        } />
        <Route path="/listingdetails" element={<ListingDetails />} /> 
      </Routes>
    </>
  );
}
export default App