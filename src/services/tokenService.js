import { jwtDecode } from 'jwt-decode'; 

const setToken = (token) => {
  localStorage.setItem('token', token);
  console.log('Token set:', token); 
};


const getToken = () => {
  const token = localStorage.getItem('token');
  return token;
};


const removeToken = () => {
  localStorage.removeItem('token');
};

const getUserFromToken = () => {
  const token = getToken();
  if (!token) return null;
  
  try {
    const decoded = jwtDecode(token);
    console.log("decoded token:", decoded);

    return decoded.user_id ? decoded.user_id : null; 
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

const getAgentFromToken = () => {
  const token = getToken();
  if (!token) return null;
  
  try {
    const decoded = jwtDecode(token);
    console.log(decoded, token)
    return decoded.agent ? decoded.agent : null; 
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

// New generalized function to get specific info from token

const getInfoFromToken = (infoKey) => {
  const token = getToken();
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    console.log('Decoded token:', decoded); // For debugging
    return decoded[infoKey] ? decoded[infoKey] : null;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
// const getInfoFromToken = (infoKey) => {
//   const user = getUserFromToken();
//   return user ? user[infoKey] : null;
// };

export { setToken, getToken, removeToken, getUserFromToken, getInfoFromToken, getAgentFromToken };
