import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserList } from './components/UserList';
import { SHOW_USERS } from './store';
import { getUsers } from './api/api';

import './App.css';
import { Pagination } from './components/Pagination';
import { UserInfo } from './components/UserInfo';

export function App() {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  const showUsers = () => {
    getUsers()
      .then((fetchedData) => {
        dispatch({
          type: SHOW_USERS,
          users: fetchedData.users,
        });
      });
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="App">
        <h1 className="page-header mb-3 text-center">
          Users List
        </h1>
        {currentUsers.length === 0
          ? (
            <button
              className="btn btn-primary"
              type="button"
              onClick={showUsers}
            >
              Show users
            </button>
          )
          : (
            <>
              <div className="usersList-container">
                <UserList users={currentUsers} />
                <UserInfo users={users} />
              </div>

              <Pagination
                usersPerPage={usersPerPage}
                totalUsers={users.length}
                paginate={paginate}
              />
            </>
          )
        }
      </div>
    </div>
  );
}
