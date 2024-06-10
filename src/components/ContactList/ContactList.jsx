import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, getFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact} from '../../redux/contacts/operations';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filtredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const filtered = Array.isArray(contacts) ? filtredContacts : [];

  if (!Array.isArray(contacts)) {
    console.error('Contacts is not an array:', contacts);
    return null;
  }

  return (
    <div className={styles.containerContacts}>
      <h3 className={styles.titleContact}>Contact List:</h3>
      <ul className={styles.itemsContact}>
        {filtered.map(contact => (
          <li key={contact.id} className={styles.itemContact}>
            {`${contact.name}: ${contact.number}`}
            <div className={styles.containerBtnDel}>
              <button className={styles.btnDelete} onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;