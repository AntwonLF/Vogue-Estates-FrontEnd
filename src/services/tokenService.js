import { jwtDecode } from 'jwt-decode'; 

const setToken = (token) => {
  localStorage.setItem('token', token);
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
    return decoded.agent ? decoded.agent : null; 
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};


const getInfoFromToken = (infoKey) => {
  const token = getToken();
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    
    return decoded[infoKey] ? decoded[infoKey] : null;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};


export { setToken, getToken, removeToken, getUserFromToken, getInfoFromToken, getAgentFromToken };
