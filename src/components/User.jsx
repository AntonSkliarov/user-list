import React from 'react';
import PropTypes from 'prop-types';

export function User(props) {
  return (
    <li>
      <div>
        <p>
          NAME: {props.name}
        </p>
        <p>
          SURNAME: {props.surname}
        </p>
        <p>
          DESCRIPTION: {props.desc}
        </p>
      </div>
    </li>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
