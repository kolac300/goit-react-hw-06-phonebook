export const ititialContacts = () => {
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  return contacts;
};
