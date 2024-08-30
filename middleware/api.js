import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Assuming your backend runs on port 3000

// Example function to register a user
export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/auth/register`, userData);
};

// Example function to login a user
export const loginUser = async (userData) => {
  return await axios.post(`${API_URL}/auth/login`, userData);
};

// Example function to create a bill
export const createBill = async (billData) => {
  return await axios.post(`${API_URL}/bills`, billData);
};
