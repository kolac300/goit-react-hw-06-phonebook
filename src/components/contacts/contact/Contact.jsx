import { Li } from './Contact.styled';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/actions';
import { toast } from 'react-hot-toast';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
    toast.success('Successfully deleted!');
  }

  return (
    <Li>
      {name}: {number}{' '}
      <button onClick={handleDelete} >Delete</button>
    </Li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
