import  jwtDecode from 'jwt-decode'; // Ensure jwt-decode is installed (`npm install jwt-decode`)

const setToken = (token) => {
  localStorage.setItem('token', token);
};

const getToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    const payload = jwtDecode(token);
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      return null;
    }
    return token;
  }
  return null;
};

const removeToken = () => {
  localStorage.removeItem('token');
};

// Assuming you're using a simplified version without user, profile, or closet ID extraction
export { setToken, getToken, removeToken };
