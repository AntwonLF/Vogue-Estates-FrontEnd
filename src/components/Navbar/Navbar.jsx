import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


const NavBar = ({ user, handleSignout }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };


    return (
        <div className="Nav">
            <button className="dropdown" onClick={toggleDropdown}>{dropdownOpen? 'X' : 'Menu'}</button>
            {dropdownOpen && (
                <nav className={dropdownOpen ? "dropdown-menu show" : "dropdown-menu"}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/location">Location</Link></li>
                        <li><Link to="/listing">Listing</Link></li>
                        {user && <li><Link to="" onClick={handleSignout}>Signout</Link></li>}
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default NavBar;
