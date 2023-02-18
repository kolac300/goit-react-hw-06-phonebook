import { nanoid } from 'nanoid';

export const addContact = (name, phone) => {
  return {
    type: 'tasks/addContact',
    payload: {
      id: nanoid(),
      phone: phone,
      name: name,
    },
  };
};
export const deleteContact = contactId => {
  return {
    type: 'tasks/deleteContact',
    payload: contactId,
  };
};
export const setStatusFilter = value => {
  return {
    type: 'filter/setStatusFilter',
    payload: value,
  };
};
