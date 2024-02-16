import axios from 'axios';
import * as tokenService from './tokenService'; // Ensure this is correctly set up

// Use the environment variable to set the base URL for listing-related API calls
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}listings`; // Adjust "/api/listings" as needed

const getListingDetails = (listingId) => {
  return axios.get(`${BASE_URL}/${listingId}`);
};

// Function to add a listing, requiring authentication (typically for agents)
const addListing = async (listingData) => {
  try {
    const response = await axios.post(`${BASE_URL}add`, listingData, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to update a listing, requiring authentication
const updateListing = async (listingId, listingData) => {
  try {
    const response = await axios.put(`${BASE_URL}update/${listingId}`, listingData, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Optionally, if your application allows for listings to be deleted
const deleteListing = async (listingId) => {
  try {
    await axios.delete(`${BASE_URL}delete/${listingId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    });
    // Handle any additional logic or state updates upon successful deletion
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default {
  getListingDetails,
  addListing,
  updateListing,
  deleteListing,
};
