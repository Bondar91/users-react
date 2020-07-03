import React, { useEffect, useState } from 'react';
import Nav from "./components/Nav";
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
      <Nav>Users</Nav>

    </div>
  );
}

export default App;
