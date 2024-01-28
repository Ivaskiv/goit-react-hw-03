import Contact from '../Contact/Contact.jsx'
import css from './ContactList.module.css'

export default function ContactList({ contacts, onDelete, onAddContact }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={() => onDelete(contact.id)}
          onAddContact={() => onAddContact(contact.id)}
        />
      ))}
    </ul>
  );
}
