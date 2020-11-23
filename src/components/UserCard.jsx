import React from 'react';
import PropTypes from 'prop-types';

export function UserCard(props) {
  return (
    <div className="userCard mb-4">
      <li className="list-group-item">
        <div>
          <p>
            {`NAME: ${props.name}`}
          </p>
          <p>
            {`SURNAME: ${props.surname}`}
          </p>
          <p>
            {`DESCRIPTION: ${props.desc}`}
          </p>
        </div>
      </li>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
