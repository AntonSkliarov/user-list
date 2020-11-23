import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <User
          key={user.id}
          name={user.name}
          surname={user.surname}
          desc={user.desc}
        />
      ))}
    </ul>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
