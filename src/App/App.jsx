import { useState } from 'react';
import ContactList from '../components/ContactList/ContactList.jsx'
import SearchBox from '../components/SearchBox/SearchBox.jsx';
import '../App/App.css'

function App() {
  const [contacts, setContacts] = useState([
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ])
  const [filterText, setFilterText] = useState('');

  const handleDeleteContact = (id) => {
    const updateContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updateContacts)
  }

  const filterContacts = () => {
    return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterText.toLowerCase())
    )
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBox filterText={filterText} onFilterChange={setFilterText} />
      <ContactList contacts={filterContacts()} onDelete={handleDeleteContact} />
    </div>
  )
}

export default App
