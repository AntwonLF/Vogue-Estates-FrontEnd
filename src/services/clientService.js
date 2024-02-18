import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}users`;

// Function to fetch client profile data
const getClient = async (clientId) => {
  try {
    const response = await axios.get(`${BASE_URL}profile/${clientId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default {
  getClient,
};
