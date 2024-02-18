import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'


const NavBar = ({ user, handleSignout, formSectionRef }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation()
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const scrollToFormSection = () => {
        if (formSectionRef) {
          formSectionRef.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className="Nav">
            <button className="dropdown" onClick={toggleDropdown}>{dropdownOpen? 'Close' : 'Menu'}</button>
            {dropdownOpen && (
                <nav className={dropdownOpen ? "dropdown-menu show" : "dropdown-menu"}>
                    <ul>
                        <li><Link onClick={toggleDropdown} to="/">Home</Link></li>
                        <li><Link onClick={toggleDropdown} to="/team">Team</Link></li>
                        <li><Link onClick={toggleDropdown} to="/location">Location</Link></li>
                        <li><Link onClick={toggleDropdown} to="/listing">Listing</Link></li>
                        {user && <li><Link  to="" onClick={handleSignout}>Signout</Link></li>}
                    </ul>
                </nav>
            )}
            { location.pathname ===  '/'? 
            <p className='dropdown' onClick={scrollToFormSection}>Login/Sign Up</p> : ''
            }
        </div>
    );
};

export default NavBar;
