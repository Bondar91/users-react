import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from "../../utils";
import UserMap from "./components/UserMap/UserMap";
import Spinner from "../../components/Spinner";

function UsersDetail({ users, ...routeProps }) {
  const { params } = routeProps.match;
  const [user, setUser] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const user = users && users.find(user => user.login.uuid === params.id);
    setUser(user);

    setTimeout(() => {
      setReady(true);
    },2000)
  }, [users])

  return (
    <div className="container">
      {ready ? (
        user ? (
          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li className="media d-flex align-content-center justify-content-center">
                  <img src={user.picture?.medium} className="mr-3" alt={user.name?.last} />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1"><strong>{user.name?.first} {user.name?.last}</strong></h5>
                      <div>
                        <a href={`mailto=${user.email}`}>{user.email}</a>
                        <p className="mb-0">
                          <span className="font-weight-bold">Adres:</span>
                          {user.location?.street?.name} {user.location?.street?.number} {user?.location?.city}
                        </p>
                        <p>
                          <span className="font-weight-bold">Data rejestracji:</span>
                          {user.registered && formatDate(user.registered.date)}
                        </p>
                      </div>
                    </div>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <h2>Lokalizacja</h2>
              <UserMap localization={user.location?.coordinates} />
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-12">
              <div className="alert alert-danger" role="alert">
                Upss! Coś poszło nie tak! <Link to={"/"}>Powrót</Link>.
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="d-flex justify-content-center align-content-center">
          <Spinner/>
        </div>
      )}
    </div>
  )
}

export default UsersDetail;