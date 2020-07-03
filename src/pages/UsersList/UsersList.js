import React, { Fragment } from 'react';
import User from "../components/User";

function UsersList({ users }) {
  return (
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
        <User key={user.login.uuid} user={user} />
      ))
    }
    </tbody>
  </table>
  )
}

export default UsersList;