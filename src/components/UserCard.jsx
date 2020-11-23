import React from 'react';
import PropTypes from 'prop-types';

export const UserCard = props => (
  <div className="userCard mb-4">
    <li className="list-group-item">
      <div>
        <p>
          <span className="text-info">Name: </span>
          {props.name}
        </p>
        <p>
          <span className="text-info">Surname: </span>
          {props.surname}
        </p>
        <p>
          <span className="text-info">Description: </span>
          {props.desc}
        </p>
      </div>
    </li>
  </div>
);

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
