import { useState } from 'react';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import { ContactForm } from '../ContactForm/ContactForm.jsx';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filterText, setFilterText] = useState('');

  const filterContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  const onAddContact = (newContact) => {
    console.log('Adding contact:', newContact);
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const onDelete = (id) => {
    const updateContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updateContacts);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filterText={filterText} onFilterChange={setFilterText} />
      <ContactList
        contacts={filterContacts()}
        onDelete={onDelete}
        onAddContact={onAddContact}
      />
    </div>
  );
}

export default App;
