import React from 'react';
import User from "../components/User";
import Spinner from "../../components/Spinner";

function UsersList({ users, ready }) {
  return (
    <div className="container-fluid">
      {ready ? (
      <table className="table table-striped">
        <thead>
        <tr>
          <th>Zdjęcie profilowe</th>
          <th>Imię i nazwisko</th>
          <th>Adres</th>
          <th>Email</th>
          <th>Data rejestracji</th>
          <th>Details</th>
        </tr>
        </thead>
        <tbody>
        {
          users.map(user => (
            <User key={user.login.uuid} user={user}/>
          ))
        }
        </tbody>
      </table>
    ) : (
      <div className="d-flex justify-content-center align-content-center">
        <Spinner/>
      </div>
    )}
  </div>
  )
}

export default UsersList;