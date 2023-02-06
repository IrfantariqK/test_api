import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!data) {
    return <div>Loading...</div>;
  } else {
    return <div>Data: {JSON.stringify(data)}</div>;
  }
}

export default App;
