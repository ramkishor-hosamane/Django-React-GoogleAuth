// tokenUtils.js
import axios from 'axios';

const TOKEN_URL = 'http://localhost:8000/api/token/refresh/';

export const getAccessToken = () => localStorage.getItem('access_token');
export const getRefreshToken = () => localStorage.getItem('refresh_token');

export const setTokens = (accessToken, refreshToken) => {
  localStorage.setItem('access_token', accessToken);
  localStorage.setItem('refresh_token', refreshToken);
};

export const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    throw new Error('No refresh token available');
  }

  try {
    const response = await axios.post(TOKEN_URL, { refresh: refreshToken });
    const { access } = response.data;
    localStorage.setItem('access_token', access);
    return access;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw error;
  }
};
