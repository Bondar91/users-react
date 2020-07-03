import React, { useEffect, useState } from 'react';
import API from './api';

function App() {
  const [results, setResults] = useState(10);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get(`?results=${results}`)
      .then(data => setUsers(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Users</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
}

export default App;
