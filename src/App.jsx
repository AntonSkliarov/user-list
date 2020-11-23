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
  // const [userPreview, setUserPreview] = useState({});
  // const [userPreview] = useState({});

  // useEffect(() => {
  //   getUsers()
  //     .then((fetchedData) => {
  //       dispatch({
  //         type: SHOW_USERS,
  //         users: fetchedData.users,
  //       });
  //     });
  // }, []);

  const showUsers = () => {
    getUsers()
      .then((fetchedData) => {
        dispatch({
          type: SHOW_USERS,
          users: fetchedData.users,
        });
      });
  };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const index = Math.floor(Math.random() * users.length - 1) + 1;

  //     console.log('index:', index);
  //     console.log('users:', users);
  //     console.log('usersEntries:', users[index]);
  //     setUserPreview(users[index]);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, [users]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <h1 className="page-header mb-3">Users List</h1>
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

  );
}
