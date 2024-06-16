import axios from 'axios';

const API_BASE_URL = `${import.meta.env.REACT_APP_API_URL}`;

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
