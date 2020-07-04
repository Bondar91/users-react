import React from 'react';
import {
  Link
} from 'react-router-dom';

import { formatDate } from '../../../utils';

function User({ user }) {
  return (
    <tr>
      <td>
        <img src={user.picture.thumbnail} alt={user.name.first}/>
      </td>
      <td>
        { user.name.first && user.name.last ? (
          `${user.name.first} ${user.name.last}`
        ) : (
          'Nie przekazano imienia i nazwiska'
        )}
      </td>
      <td>
        { user.location.street && user.location.city ? (
          `${user.location.street.name} ${user.location.street.number} ${user.location.city}`
        ) : (
          'Brak'
        )}
      </td>
      <td>{user.email}</td>
      <td>
        {
          formatDate(user.registered.date)
        }
      </td>
      <td>
        <Link className="btn btn-primary"  to={`/users/${user.login.uuid}`}>Szczegóły</Link>
      </td>
    </tr>
  )
}

export default User;