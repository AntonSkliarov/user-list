import React from 'react';
import PropTypes from 'prop-types';
import { UserCard } from './UserCard';

export function UserList({ users }) {
  return (
    <ul className="list-group">
      {users.map(user => (
        <UserCard
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
