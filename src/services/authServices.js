import axios from 'axios';
import * as tokenService from './tokenService'; 

const API_BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL;


const CLIENT_BASE_URL = `${API_BASE_URL}client/`;
const AGENT_BASE_URL = `${API_BASE_URL}agents/`;



const handleLoginResponse = (response) => {
  const token  = response.data.access;
  if (token) {
    tokenService.setToken(token);
    return tokenService.getAgentFromToken(); 
  } else {
    throw new Error("No token received");
  }
};


async function loginClient(credentials) {
  try {
    const response = await axios.post(`${CLIENT_BASE_URL}login/`, credentials);
    const token = response.data.access
    setToken(token);
    return handleLoginResponse(response);
  } catch (err) {
    console.error("Login client error:", err);
    throw err;
  }
}
const setToken = (token) => {
  localStorage.setItem('token', token);
};



async function loginAgent(credentials) {
  try {
    const response = await axios.post(`${AGENT_BASE_URL}login/`, credentials);
    const  token  = response.data.access; 
    setToken(token);
    return handleLoginResponse(response);
  } catch (err) {
    console.error("Login agent error:", err);
    throw err;
  }
}




async function signupClient(clientData) {
  try {
    const response = await axios.post(`${CLIENT_BASE_URL}register/`, clientData);
    const  token  = response.data.access; 
    setToken(token);
    return handleLoginResponse(response);
  } catch (err) {
    console.error("Signup client error:", err);
    throw err;
  }
}


async function signupAgent(agentData) {
  try {
    const response = await axios.post(`${AGENT_BASE_URL}register/`, agentData);
    const  token  = response.data.access; 
    setToken(token);
    return handleLoginResponse(response);
  } catch (err) {
    console.error("Signup agent error:", err);
    throw err;
  }
}

function signout() {
  tokenService.removeToken();
}


function getCurrentUser() {
  return tokenService.getUserFromToken();
}

export {
  loginClient,
  loginAgent,
  signupClient,
  signupAgent,
  signout,
  getCurrentUser
};
