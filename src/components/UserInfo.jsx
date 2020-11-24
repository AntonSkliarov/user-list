import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function UserInfo({ users }) {
  const [userPreview, setUserPreview] = useState(users[1]);

  useEffect(() => {
    const timer = setInterval(() => {
      const index = Math.floor(Math.random() * users.length - 1) + 1;

      setUserPreview(users[index]);
    }, 8000);

    return () => clearTimeout(timer);
  }, [users]);

  return (
    <div className="user-preview ml-3">
      <p>
        <span className="text-info">Surname: </span>
        {userPreview.surname}
      </p>
      <p>
        <span className="text-info">Name: </span>
        {userPreview.name}
      </p>
    </div>
  );
}

UserInfo.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
