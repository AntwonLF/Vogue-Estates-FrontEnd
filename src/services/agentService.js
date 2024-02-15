import axios from 'axios';

// Utilizing environment variables for the base URL
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}agents`;

// Function to fetch agent profile data
const getAgent = async (agentId) => {
  try {
    const response = await axios.get(`${BASE_URL}profile/${agentId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};



export default {
  getAgent,
};
