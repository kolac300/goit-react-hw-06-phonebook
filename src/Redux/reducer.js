import { ititialContacts } from 'FakeAPI';

const { combineReducers } = require('redux');

const phoneBookInitialState = ititialContacts();

const tasksReducer = (state = phoneBookInitialState, action) => {
  switch (action.type) {
    case 'tasks/addContact':
      return [...state, action.payload];
    case 'tasks/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterInitialState = '';

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/setStatusFilter':
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: tasksReducer,
  filter: filterReducer,
});
