import axios from 'axios';
import * as tokenService from './tokenService'; // Ensure this is correctly set up

// Adjust the BASE_URL to match the expected endpoint for agent listing details
// Assuming VITE_BACK_END_SERVER_URL includes the base domain and possibly base path but not the specific endpoint
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`; // Update this path as needed

const getAllListings = () => {
  return axios.get(`${BASE_URL}listinglist/`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  });
};



// Function to add a listing, requiring authentication (typically for agents)
const addListing = async (listingData, userId) => {
  try {
    console.log('hi')
    const url = `${BASE_URL}agentlisting/${userId}/`; // Make sure BASE_URL is correct and agentId is passed
    const response = await axios.post(url, listingData, {
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
    const response = await axios.put(`${BASE_URL}listing/${listingId}/`, listingData, { // Removed 'update/' to align with REST conventions
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
    await axios.delete(`${BASE_URL}listing/${listingId}`, { // Removed 'delete/' to align with REST conventions
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    });
    // Handle any additional logic or state updates upon successful deletion
  } catch (error) {
    console.error(error);
    throw error;
  }
};



export {
  getAllListings,
  addListing,
  updateListing,
  deleteListing,
};