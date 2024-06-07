import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const GoogleAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // Exchange authorization code for tokens
      axios.post('http://localhost:8000/rest-auth/google/', { code })
        .then(response => {
          const { access_token, refresh_token } = response.data;

          // Store tokens in localStorage
          localStorage.setItem('access_token', access_token);
          localStorage.setItem('refresh_token', refresh_token);

          // Redirect to home page or desired page
          navigate('/');
        })
        .catch(error => {
          console.error('Error during login:', error.response ? error.response.data : error.message);
        });
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default GoogleAuthCallback;
