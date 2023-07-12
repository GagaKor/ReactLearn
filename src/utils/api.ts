import axios from 'axios';
import { getCookie } from './cookie';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL : 'http://localhost:8080',
  timeout: 3600,
  withCredentials: true,
});

export default api;
