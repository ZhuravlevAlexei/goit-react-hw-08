import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from './redux/contacts/operartions';
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from './redux/contacts/selectors';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import './App.css';
import css from './App.module.css';
import { Loader } from './components/Loader/Loader';
import { Layout } from './components/Layout/Layout';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.phoneBookArea}>
      <Toaster position="top-right" toastOptions={{ duration: 2500 }} />
      <Layout>
        <h3 className={css.mainTitle}>Phonebook goit-react-hw-08</h3>
        <ContactForm />
        <SearchBox />
        {isLoading && !error && (
          <div>
            <Loader />
          </div>
        )}
        {!isLoading && contacts.length === 0 && <b>No contacts added...</b>}
        {contacts.length > 0 && <ContactList />}
      </Layout>
    </div>
  );
};

export default App;
