import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserList } from './components/UserList';
import { SHOW_USERS } from './store';
import { getUsers } from './api/api';

export function App() {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);

  const showUsers = () => {
    getUsers()
      .then((fetchedData) => {
        dispatch({
          type: SHOW_USERS,
          users: fetchedData.users,
        });
      });
  };

  return (
    <div className="App">
      <h1>Users List</h1>
      {users.length === 0
        ? <button
          type="button"
          onClick={showUsers}
        >
          Show users
        </button>
        : <UserList users={users} />
      }
    </div>
  );
}
