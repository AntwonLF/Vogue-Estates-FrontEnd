import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteListing, updateListing } from '../../services/listingService'; 
import * as tokenService from '../../services/tokenService'; 
import './ListingDetails.css';

const ListingDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { listing: initialListing } = location.state || { listing: null };
  const [listing, setListing] = useState(initialListing);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setListing({ ...listing, [name]: value });
  };
  const handleBack = () => {
    navigate('/listing'); 
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (listing && listing.id) {
      try {
        await updateListing(listing.id, listing);
        navigate('/listing'); 
        setIsEditing(false); 
      } catch (error) {
        console.error('Failed to update listing:', error);
      }
    }
  };

  const handleDelete = async () => {
    if (listing && listing.id) {
      try {
        await deleteListing(listing.id);
        navigate('/listing');
      } catch (error) {
        console.error('Failed to delete listing:', error);
      }
    }
  };

  const editModeView = (
    <>
      <input
        type="text"
        name="address"
        value={listing.address}
        onChange={handleInputChange}
        placeholder="Address"
      />
      <input
        type="text"
        name="city"
        value={listing.city}
        onChange={handleInputChange}
        placeholder="City"
      />
      <input
        type="text"
        name="state"
        value={listing.state}
        onChange={handleInputChange}
        placeholder="State"
      />
      <input
        type="text"
        name="zipcode"
        value={listing.zipcode}
        onChange={handleInputChange}
        placeholder="Zipcode"
      />
      <input
        type="text"
        name="description"
        value={listing.description}
        onChange={handleInputChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="price"
        value={listing.price}
        onChange={handleInputChange}
        placeholder="Price"
      />
      <input
        type="number"
        name="bedrooms"
        value={listing.bedrooms}
        onChange={handleInputChange}
        placeholder="Bedrooms"
      />
      <input
        type="number"
        name="bathrooms"
        value={listing.bathrooms}
        onChange={handleInputChange}
        placeholder="Bathrooms"
      />
      <input
        type="number"
        name="sqft"
        value={listing.sqft}
        onChange={handleInputChange}
        placeholder="Square Feet"
      />
      <input
        type="text"
        name="agent"
        value={listing.agent}
        onChange={handleInputChange}
        placeholder="Agent"
      />
      
      <input
        type="text"
        name="image"
        value={listing.images[0].image}
        onChange={(e) => handleImageChange(e, 0)} 
        placeholder="Image URL"
      />
      <input
        type="text"
        name="description"
        value={listing.images[0].description}
        onChange={(e) => handleImageChange(e, 0)} 
        placeholder="Image Description"
      />
      <button onClick={handleUpdate} className="update-btn">Update Listing</button>
    </>
  );
  

  const displayModeView = (
    <>
      {listing && listing.images && listing.images[0] && (
        <img src={listing.images[0].image} alt="Listing Detail" style={{ maxWidth: '100%', height: 'auto' }} />
      )}
      <p className="property-details">
        {listing ? listing.description : "No details available."}
      </p>
      {listing && (
        <div>
          <p><strong>Price:</strong> ${listing.price}</p>
        </div>
      )}
    </>
  );

  return (
    <div>
      <h2>Listing Details</h2>
      <button onClick={handleBack} className="back-btn">Back to Listings</button>
      {isEditing ? editModeView : displayModeView}
      <div className="action-buttons">
        <button onClick={() => setIsEditing(!isEditing)} className="edit-btn">{isEditing ? 'Cancel' : 'Edit'}</button>
        <button onClick={handleDelete} className="delete-btn">Delete Listing</button>
      </div>
    </div>
  );
};

export default ListingDetails;
