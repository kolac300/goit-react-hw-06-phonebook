import { ContactList } from './contacts/ContactList';
import { PhoneBook } from './phoneBook/PhoneBook';
import { Filter } from './filter/Filter';
import { ContactsBook } from './App.styled';
import { Toaster } from 'react-hot-toast';
import React from 'react';
export const App = () => {
  return (
    <>
      <ContactsBook>
        <Toaster position="top-center" reverseOrder={false} />
        <PhoneBook />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </ContactsBook>
    </>
  );
};
