import axios from 'axios';
import * as tokenService from './tokenService';

// Use the environment variable for the base URL

const USER_BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}users`;
const AGENT_BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}agents`;


// Function to decode or retrieve user/agent info from token
function getUser() {
  return tokenService.getUserFromToken();
}

// Signup for users
async function signupUser(user) {
  try {
    const response = await axios.post(`${USER_BASE_URL}/register`, user);
    const json = response.data;
    if (json.token) {
      tokenService.setToken(json.token);
      return json;
    }
    if (json.err) {
      throw new Error(json.err);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// Signup for agents
async function signupAgent(agent) {
  try {
    const response = await axios.post(`https://vogue-estates-90406bfbb091.herokuapp.com/agents/register/`, agent);
    console.log(agent)
    const json = response.data;
    console.log(response.data)
    if (json.token) {
      tokenService.setToken(json.token);
      return json;
    }
    if (json.err) {
      throw new Error(json.err);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// Login for users
async function loginUser(credentials) {
  try {
    const response = await axios.post(`${USER_BASE_URL}/login`, credentials);
    const json = response.data;
    if (json.token) {
      tokenService.setToken(json.token);
      return json;
    }
    if (json.err) {
      throw new Error(json.err);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// Login for agents
async function loginAgent(credentials) {
  try {
    const response = await axios.post(`${AGENT_BASE_URL}/login`, credentials);
    const json = response.data;
    if (json.token) {
      tokenService.setToken(json.token);
      return json;
    }
    if (json.err) {
      throw new Error(json.err);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// Logout function
function logout() {
  tokenService.removeToken();
}

export {
  signupUser,
  signupAgent,
  loginUser,
  loginAgent,
  getUser,
  logout,
};
