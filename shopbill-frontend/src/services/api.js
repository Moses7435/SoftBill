import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

export const getProducts = () => axios.get(`${API_BASE_URL}/products`);
export const addProduct = (productData) => axios.post(`${API_BASE_URL}/products/add`, productData);
