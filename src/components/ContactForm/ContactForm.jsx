import { toast } from 'react-hot-toast';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from '../../redux/contacts/operartions';

import { selectContacts } from '../../redux/contacts/selectors';
import css from './ContactForm.module.css';

const formikValidationShema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(40, 'Must be max 40 characters or less')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  number: Yup.string()
    .min(
      10,
      'Must be at least 10 digits. If you have 8 or less, add few 0 in front to match format'
    )
    .max(20, 'Must be max 20 digits')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const tempName = values.name.toLowerCase();
    const foundContact = contacts.find(
      cont => cont.name.toLowerCase() === tempName.toLowerCase()
    );
    if (foundContact) {
      toast.error(`${foundContact.name} is already in contact list.`);
      return;
    }

    const newContact = {
      name: values.name.trim(),
      number: values.number.trim(),
    };

    dispatch(addContact(newContact));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formikValidationShema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <label className={css.contactLabel}>
          <span className={css.contactInput}>Name</span>
          <Field className={css.contactInput} type="text" name="name" />
          <ErrorMessage
            className={css.contactError}
            component="p"
            name="name"
          />
        </label>
        <label className={css.contactLabel}>
          <span className={css.contactInput}>Number</span>
          <Field className={css.contactInput} type="text" name="number" />
          <ErrorMessage
            className={css.contactError}
            component="p"
            name="number"
          />
        </label>
        <div className={css.buttonWrapper}>
          <button className={css.addBtn} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
