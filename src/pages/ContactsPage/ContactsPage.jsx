import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from '../../redux/contacts/selectors';

import Loader from '../../components/Loader/Loader';

const ContactForm = lazy(() =>
  import('../../components/ContactForm/ContactForm')
);
const SearchBox = lazy(() => import('../../components/SearchBox/SearchBox'));
const ContactList = lazy(() =>
  import('../../components/ContactList/ContactList')
);

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h3 className={css.mainTitle}>Phonebook</h3>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && (
        <div>
          <Loader />
        </div>
      )}
      {!isLoading && contacts.length === 0 && <b>No contacts added...</b>}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default ContactsPage;
