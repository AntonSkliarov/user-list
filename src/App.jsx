import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserList } from './components/UserList';
import { SHOW_USERS } from './store';

import data from './api/users.json';

export function App() {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);

  console.log(users);

  const showUsers = () => {
    dispatch({
      type: SHOW_USERS,
      users: data.users,
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
