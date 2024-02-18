import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteListing } from '../../services/listingService';

const ListingDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { listing } = location.state || { listing: null };
  
  const handleDelete = async () => {
    if (listing && listing.id) {
      try {
        await deleteListing(listing.id);
        navigate('/'); 
      } catch (error) {
        console.error('Failed to delete listing:', error);
      }
    }
  };

  return (
    <div>
      <h2>Listing Details</h2>
      {listing && listing.images && listing.images[0] && (
        <img src={listing.images[0].image} alt="Listing Detail" style={{ maxWidth: '100%', height: 'auto' }} />
      )}
      <p className="property-details">
        {listing ? listing.description : "No details available."}
      </p>
  
      {listing && (
        <div>
          <p><strong>Price:</strong> ${listing.price}</p>
          <p><strong>Location:</strong> {listing.location}</p>
          
        </div>
      )}

      <div className="contact-form">
        <h3>Contact Us</h3>
        <form>
          <input type="text" placeholder="Name" name="name" required />
          <input type="tel" placeholder="Number" name="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
          <input type="email" placeholder="Email" name="email" required />
          <button type="submit">Submit</button>
        </form>
      </div>
      <button onClick={handleDelete} className="delete-btn">Delete Listing</button>
    </div>
  );
};

export default ListingDetails;
