  import css from './Contact.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

export default function Contact({contact, onDelete}) {
    const { id, name, number } = contact;
    
  return (
    <div>
      <li className={css.contact} key={id}>
        <div className={css.contactTitle}>
          <p className={css.contactName}><FaUserLarge className={css.icon} />{name}</p>
          <p className={css.contactNumber}><FaPhoneAlt className={css.icon}/>{number}</p>
        </div>
      <button className={css.btnContact} onClick={()=>onDelete(id)}>
        Delete
      </button>
    </li>
    </div>
  )
  }

