import axios from 'axios';

const API_BASE_URL = 'https://explore-metroplex-backend.vercel.app';

export default axios.create({
  baseURL: API_BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
