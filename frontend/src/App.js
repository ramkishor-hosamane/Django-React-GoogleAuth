import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if access token exists in localStorage
    const accessToken = localStorage.getItem('access_token');
    setIsAuthenticated(!!accessToken); // Sets to true if accessToken is present, otherwise false
  }, []);

  const googleClientId = "577351510494-mud73dpt6c9urfna06maak54ikps2bct.apps.googleusercontent.com";
  const redirectUri = "http://localhost:3000/auth/callback/";
  const scope = "profile email";
  const responseType = "code";
  const accessType = "offline";

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&access_type=${accessType}`;

  const handleGoogleLogin = () => {
    window.location.href = authUrl;
  };

  return (
    <div className="App">
      <h1>Welcome</h1>
      {!isAuthenticated ? (
        <>
          <button onClick={handleGoogleLogin}>
            LOGIN WITH GOOGLE
          </button>
        </>
      ) : (
        <>
          <h2>You are logged in!</h2>
          <Link to="/protected">Go to Protected Resource</Link>
        </>
      )}
    </div>
  );
}

export default App;
