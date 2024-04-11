import { useSelector } from 'react-redux';

import { selectFilteredContacts } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsOps';

import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contListArea}>
      {filteredContacts.length === 0 && <p>No matces found in contacts...</p>}
      {filteredContacts.length > 0 &&
        filteredContacts.map(elm => {
          return (
            <Contact key={elm.id} deleteContact={deleteContact} {...elm} />
          );
        })}
    </ul>
  );
};

export default ContactList;
