// export function createStore(
//   reducer,
//   initialState = reducer(undefined, {}),
// ) {
//   let state = initialState;
//   const callbacks = [];

//   return {
//     getState() {
//       return state;
//     },
//     dispatch(action) {
//       state = reducer(state, action);
//       callbacks.forEach(f => f());
//     },
//     subscribe(f) {
//       callbacks.push(f);
//     },
//   };
// }

// export function combineReducers(reducers) {
//   return (state = {}, action) => {
//     const result = {};

//     for (const key in reducers) {
//       result[key] = reducers[key](state[key], action);
//     }

//     return result;
//   };
// }
