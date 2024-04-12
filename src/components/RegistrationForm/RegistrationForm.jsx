import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  //   const dispatch = useDispatch();

  const formikValidationShema = Yup.object({
    username: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(40, 'Must be max 40 characters or less')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Username may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('Required'),
    email: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(40, 'Must be max 40 characters or less')
      .matches(
        /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
        'Enter a valid email address'
      )
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    // dispatch(
    //   register({
    //     name: form.elements.name.value,
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={formikValidationShema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Username
          <Field
            className={css.input}
            type="text"
            name="username"
            autoComplete="username"
          />
          <ErrorMessage name="username" component="p" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage name="email" component="p" />
        </label>
        <label className={css.label}>
          Password
          <Field
            className={css.input}
            type="password"
            name="password"
            autoComplete="new-password"
          />
          <ErrorMessage name="password" component="p" />
        </label>
        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
