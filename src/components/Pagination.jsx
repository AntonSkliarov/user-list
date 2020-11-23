import React from 'react';
import PropTypes from 'prop-types';

export const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        {pageNumbers.map(pageNumber => (
          <li key={pageNumber} className="page-item">
            <a
              href="!#"
              className="page-link"
              onClick={() => paginate(pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  usersPerPage: PropTypes.number.isRequired,
  totalUsers: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
