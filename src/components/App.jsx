import { useEffect, useState } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './Сontacts/Сontacts';
import contactsList from './contactsList.json';
import { Filter } from './Filter/filter';
import { Container, Title, Btn } from './App.styled';
import { Modal } from './Modal/Modal';
import { BsFillPersonPlusFill } from 'react-icons/bs';

export const App = () => {
    const [contacts, setContacts] = useState(() => {
        const saveContact = localStorage.getItem('contacts');
        if (saveContact !== null) {
            const parseContact = JSON.parse(saveContact);
            return parseContact;
        }
        return contactsList;
    });
    const [filterContact, setFilter] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = newContact => {
        const isExist = contacts.find(
            contact =>
                contact.name === newContact.name ||
                contact.number === newContact.number
        );
        if (isExist) {
            alert(`${newContact.name}: is already in contacts`);
            return;
        } else {
            setContacts(contacts => [...contacts, newContact]);
            toggleModal();
        }
    };

    const deleteContact = contactId => {
        setContacts(() => contacts.filter(contact => contact.id !== contactId));
    };
    const filterContactsList = evt => setFilter(() => evt.target.value);

    const onFilterContacts = () => {
        const normalizedFilter = filterContact.toLowerCase();
        const filterContactsList = contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
        return filterContactsList;
    };
    const toggleModal = () => {
        setShowModal(() => !showModal);
    };

    return (
        <Container>
            <Title>Phonebook</Title>
            <Btn type="button" onClick={toggleModal}>
                <BsFillPersonPlusFill />
            </Btn>
            {showModal && (
                <Modal onClose={toggleModal}>
                    <ContactForm onAddContact={addContact} />
                </Modal>
            )}

            <Title>Contacts</Title>
            <Filter value={filterContact} onChange={filterContactsList} />
            <ContactList
                contacts={onFilterContacts()}
                onDeleteContact={deleteContact}
            />
        </Container>
    );
};
