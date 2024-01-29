import { useState, useEffect } from 'react';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import { ContactForm } from '../ContactForm/ContactForm.jsx';
import './App.css';
import Contact from '../Contact/Contact.jsx';

function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  });

  const [filterText, setFilterText] = useState('');

  const filterContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  const onAddContact = (newContact) => {
  setContacts((prevContacts) => {
    const isContact = prevContacts.some((contact) => contact.name === newContact.name);
    if (!isContact) {
      return [...prevContacts, { id: Date.now(), ...newContact }];
    }
    return prevContacts;
  });
};

  const onDelete = (id) => {
    const updateContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updateContacts);
  };

  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])


  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />
      <p className='searchText' >Find contacts by name</p>
      <SearchBox filterText={filterText} onFilterChange={setFilterText} />
      <ContactList onDelete={onDelete} onSubmit={onAddContact}>
      {filterContacts().map((contact) => (
        <Contact {...contact} key={contact.id} onDelete={onDelete}/>
      ))}
    </ContactList>
      
    </div>
  );
}

export default App;
