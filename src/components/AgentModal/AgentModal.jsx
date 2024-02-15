import React, { useState, useEffect } from 'react';
import listingService from '../../services/listingService';

import React, { useState, useEffect } from 'react';
import listingService from './listingService'; 

const AgentModal = ({ listingId, mode, onClose, refreshListings }) => {
  const [listing, setListing] = useState({
    name: '', 
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (mode === 'edit' && listingId) {
      const fetchListingDetails = async () => {
        try {
          const response = await listingService.getListingDetails(listingId);
          setListing(response.data);
        } catch (error) {
          setError('Error fetching listing details');
          console.error(error);
        }
      };

      fetchListingDetails();
    }
  }, [listingId, mode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setListing({ ...listing, [name]: value });
  };

  const createListing = async () => {
    try {
      await listingService.addListing(listing);
      onClose();
      refreshListings();
    } catch (error) {
      setError('Error creating listing');
      console.error(error);
    }
  };

  const updateListing = async () => {
    try {
      await listingService.updateListing(listingId, listing);
      onClose();
      refreshListings();
    } catch (error) {
      setError('Error updating listing');
      console.error(error);
    }
  };

  const deleteListing = async () => {
    try {
      await listingService.deleteListing(listingId);
      onClose();
      refreshListings();
    } catch (error) {
      setError('Error deleting listing');
      console.error(error);
    }
  };

  return (
    <div className="agent-modal">
      <form onSubmit={(e) => e.preventDefault()} className="agent-modal-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={listing.name}
            onChange={handleInputChange}
            placeholder="Listing Name"
          />
          {/* Add other input fields as needed */}
        </div>
        {/* Conditional rendering based on mode */}
        {mode === 'create' && (
          <button type="button" onClick={createListing}>Create Listing</button>
        )}
        {mode === 'edit' && (
          <>
            <button type="button" onClick={updateListing}>Update Listing</button>
            <button type="button" onClick={deleteListing}>Delete Listing</button>
          </>
        )}
        <button type="button" onClick={onClose}>Close</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AgentModal;
