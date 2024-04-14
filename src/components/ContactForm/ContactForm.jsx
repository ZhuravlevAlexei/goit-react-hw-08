import { toast } from 'react-hot-toast';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { contactValSchema } from '../../service/validationSchemas';
import { contactFormTemplate } from '../../service/formikTemplates/formikTemplates';

import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

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
      validationSchema={contactValSchema}
      onSubmit={handleSubmit}
    >
      {contactFormTemplate}
    </Formik>
  );
};

export default ContactForm;
