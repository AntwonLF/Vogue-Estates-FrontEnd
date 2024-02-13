import axios from 'axios';

// Utilizing environment variables for the base URL
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/users`;

// Function to fetch user profile data
const getUserProfile = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/profile/${userId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export default {
  getUserProfile,
};
