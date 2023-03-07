import React from 'react';
import { List, Item, Text, Btn } from './ContactList.styled';
import PropTypes from 'prop-types';
import { BsFillPersonXFill } from 'react-icons/bs';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Text>
              {name}: {number}
            </Text>
            <Btn type="button" onClick={() => onDeleteContact(id)}>
              <BsFillPersonXFill />
            </Btn>
          </Item>
        ))}
      </List>
    </div>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
