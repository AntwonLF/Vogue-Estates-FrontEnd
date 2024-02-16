import React, { useState } from 'react';
import * as tokenService from '../../services/tokenService'; 
import { getUserFromToken, getInfoFromToken } from '../../services/tokenService';
import { addListing } from '../../services/listingService'

const AgentModal = ({ listingId, mode, onClose, refreshListings, userId }) => {
  // Initialize listing state to include an images array and agent as null for integer input
  const [listing, setListing] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    description: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    agent: '', 
    images: [{ image: '', description: '' }],
  });

  const [error, setError] = useState('');

  // Generic input change handler with integer parsing for numeric fields
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    let updatedValue = value;
    if(type === 'number'){
       updatedValue =  parseInt(value, 10);
       if(isNaN(updatedValue)){
          updatedValue = '';
       }
      }
    setListing((prevListing) => ({
      ...prevListing,
      [name] : updatedValue, 
    }));
  };


  const handleImageChange = (e) => {
    const { name, value } = e.target;
    setListing((prevListing) => ({
      ...prevListing,
      images: [{ ...prevListing.images[0], [name]: value }],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve user ID from token
    const userId = getInfoFromToken('user_id'); 
    console.log('userID retrieved:', userId)// Adjust 'userid' based on the actual key in your token payload

    if (userId) {
        const updatedListing = { ...listing, agent: 9 };
        console.log(updatedListing);

        try {
            await addListing(updatedListing, userId); 
            refreshListings();
            onClose();
        } catch (error) {
            setError("Failed to add listing. Please try again."); 
        }
    } else {
        setError("User not identified. Please log in again."); 
    }
};


  return (
    <div className="agent-modal">
      <form onSubmit={handleSubmit} className="agent-modal-form">
        {/* Dynamic form fields excluding 'id' and 'images' */}
        {Object.keys(listing).map((key) =>
          key !== 'id' && key !== 'images' ? (
            <div className="form-group" key={key}>
              <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <input
                type={key === 'price' || key === 'bedrooms' || key === 'bathrooms' || key === 'sqft' || key === 'agent' ? 'number' : 'text'}
                id={key}
                name={key}
                value={listing[key]}
                onChange={handleInputChange}
                placeholder={`Enter ${key}`}
              />
            </div>
          ) : null
        )}
        {/* Image URL and Description Input */}
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={listing.images[0].image}
            onChange={handleImageChange}
            placeholder="Enter Image URL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Image Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={listing.images[0].description}
            onChange={handleImageChange}
            placeholder="Enter Image Description"
          />
        </div>
        <div className="action-buttons">
          <button type="submit" className="save-btn">Save</button>
          <button type="button" onClick={onClose} className="close-btn">Close</button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default AgentModal;
