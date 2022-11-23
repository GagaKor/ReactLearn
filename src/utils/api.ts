import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'http://localhost/api' : 'http://localhost:8080',
  timeout: 3600,
});

export default api;
