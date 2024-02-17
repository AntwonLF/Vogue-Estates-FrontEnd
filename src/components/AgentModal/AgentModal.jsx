import React, { useState, useEffect } from 'react';
import { getInfoFromToken } from '../../services/tokenService';
import { addListing, updateListing, deleteListing } from '../../services/listingService'

const AgentModal = ({ listingId, onClose, refreshListings, existingListing = null }) => {
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
    ...existingListing
  });

  const [error, setError] = useState('');

  useEffect(() => {
    if (existingListing) {
      setListing(existingListing);
    }
  }, [existingListing]);


  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    let updatedValue = type === 'number' ? parseInt(value, 10) || '' : value;
    setListing((prevListing) => ({
      ...prevListing,
      [name]: updatedValue,
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
    if (!userId) {
      setError("User not identified. Please log in again.");
      return;
    }

    try {
      if (listingId) {
        await updateListing(listingId, listing);
      } else {
        await addListing({ ...listing, agent: userId });
      }
      refreshListings();
      onClose();
    } catch (error) {
      setError(`Failed to ${listingId ? 'update' : 'add'} listing. Please try again.`);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteListing(listingId);
      refreshListings();
      onClose();
    } catch (error) {
      setError("Failed to delete listing. Please try again.");
    }
  };
  

  return (
    <div className="agent-modal">
      <form onSubmit={handleSubmit} className="agent-modal-form">
        {Object.keys(listing).map((key) =>
          key !== 'id' && key !== 'images' ? (
            <div className="form-group" key={key}>
              <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <input
                type={['price', 'bedrooms', 'bathrooms', 'sqft', 'agent'].includes(key) ? 'number' : 'text'}
                id={key}
                name={key}
                value={listing[key]}
                onChange={handleInputChange}
                placeholder={`Enter ${key}`}
              />
            </div>
          ) : null
        )}
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
        {listingId && (
          <>
            <button type="button" onClick={handleDelete} className="delete-btn">Delete</button>
            <button type="button" onClick={handleUpdate} className="update-btn">Update</button>
          </>
        )}
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