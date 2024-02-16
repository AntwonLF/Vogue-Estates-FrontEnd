import React from 'react';
import { useLocation } from 'react-router-dom';

const ListingDetails = () => {
  const location = useLocation();
  const { imgUrl } = location.state || { imgUrl: '' };

  return (
    <div>
      <h2>Listing Details</h2>
      {imgUrl && <img src={imgUrl} alt="Listing Detail" style={{ maxWidth: '100%', height: 'auto' }} />}
      <p className="property-details">
        This is a beautiful property located in a serene environment with excellent amenities and a stunning view. It offers a unique blend of comfort, style, and convenience, making it the perfect choice for anyone looking for a peaceful retreat or a vibrant lifestyle.
      </p>

      
      <div className="contact-form">
        <h3>Contact Us</h3>
        <form>
          <input type="text" placeholder="Name" name="name" required />
          <input type="tel" placeholder="Number" name="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
          <input type="email" placeholder="Email" name="email" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ListingDetails;
