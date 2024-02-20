import axios from 'axios';
import * as tokenService from './tokenService'; // 


const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`; 

const getAllListings = () => {
  return axios.get(`${BASE_URL}listinglist/`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  });
};




const addListing = async (listingData, userId) => {
  try {
    const url = `${BASE_URL}agentlisting/${userId}/`; 
    const response = await axios.post(url, listingData, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const updateListing = async (listingId, listingData) => {
  try {
    const response = await axios.put(`${BASE_URL}listing/${listingId}/`, listingData, { 
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const deleteListing = async (listingId) => {
  try {
    await axios.delete(`${BASE_URL}listing/${listingId}`, { 
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    });
   
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