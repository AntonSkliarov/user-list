import { createStore } from 'redux';

export const SHOW_USERS = 'users/SHOW_USERS';

const initialState = {
  users: [],
};

export const usersReducer = (state, action) => {
  switch (action.type) {
    case SHOW_USERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

export const store = createStore(usersReducer, initialState);
