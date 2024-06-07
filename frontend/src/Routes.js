import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import GoogleAuthCallback from './GoogleAuthCallback';
import ProtectedResource from './ProtectedResource';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/auth/callback/" element={<GoogleAuthCallback />} />
      <Route path="/protected" element={<ProtectedResource />} />
    </Routes>
  </Router>
);

export default AppRoutes;
