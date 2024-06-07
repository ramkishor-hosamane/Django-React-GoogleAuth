import React, { useEffect, useState } from 'react';
import api from './axiosConfig'; // Import the configured Axios instance

const ProtectedResource = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/protected_resource/');
        setData(response.data);
      } catch (error) {
        setError(error.response ? error.response.data : error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Protected Resource</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
    </div>
  );
};

export default ProtectedResource;
