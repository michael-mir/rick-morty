import axios from 'axios';

import { API_URL } from '/common/constants/api';

const errorHandler = Promise.reject;

const api = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  baseURL: API_URL,
});

api.interceptors.request.use((config) => ({
  ...config,
  headers: {
    ...config.headers,
  },
}));

api.interceptors.response.use(({ data }) => data, errorHandler);

export default api;
