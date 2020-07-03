import React, { useEffect, useState } from 'react';
import Nav from "./components/Nav";
import UsersList from "./pages/UsersList";

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
      <div className="container-fluid">
        <UsersList users={users}/>
      </div>
    </div>
  );
}

export default App;
