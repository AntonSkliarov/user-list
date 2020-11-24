import { createStore } from 'redux';

export const SET_USERS = 'users/SET_USERS';

const initialState = {
  users: [],
};

export const usersReducer = (state, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

export const store = createStore(usersReducer, initialState);
