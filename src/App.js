import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Nav from "./components/Nav";
import UsersList from "./pages/UsersList";
import UsersDetail from "./pages/UsersDetail";

import API from './api';

function App() {
  const [results, setResults] = useState(10);
  const [users, setUsers] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    API.get(`?results=${results}`)
      .then(data => {
        setUsers(data.results);

        setTimeout(() => {
          setReady(true);
        }, 2000)

      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <Nav>Users</Nav>

      <Router>
        <Switch>
          <Route exact path="/"
            render={ () => (
              <UsersList users={users} ready={ready}/>
            )}
          />
          <Route exact path="/users/:id"
            render={ (routeProps) => (
              <UsersDetail {...routeProps } users={users} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
