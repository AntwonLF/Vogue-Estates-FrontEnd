import React, { useState } from 'react';
import * as tokenService from '../../services/tokenService'; 
import { getUserFromToken, getInfoFromToken } from '../../services/tokenService';
import { addListing } from '../../services/listingService'
import './AgentModal.css';

const AgentModal = ({ listingId, mode = "add", onClose, refreshListings, userId, existingListing }) => {
  const [listing, setListing] = useState( existingListing || {
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
    const userId = getInfoFromToken('user_id');

    if (userId) {
      try {
        if (mode === "add") {
          await addListing(listing, userId);
        } else if (mode === "update") {
          await updateListing(listingId, listing); // Ensure updateListing is correctly implemented
        }
        refreshListings();
        onClose();
      } catch (error) {
        setError("Failed to process listing. Please try again.");
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