import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operartions';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const [passFieldType, setPassFieldType] = useState(true);
  const dispatch = useDispatch();

  const formikValidationShema = Yup.object({
    username: Yup.string()
      .min(4, 'Must be at least 4 characters')
      .max(40, 'Must be max 16 characters or less')
      .matches(
        /^[a-zA-Z0-9_.-]{4,40}$/,
        'Username may contain only letters, numbers, underscores, dots.'
      )
      .required('Required'),
    email: Yup.string()
      .max(40, 'Must be max 40 characters or less')
      .matches(
        /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Enter a valid email address, for example "nJ8pN@example.com".'
      )
      .required('Required'),
    password: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(20, 'Must be max 20 characters or less')
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{3,20}$/,
      //   'Password must be at least 3 up to 20 characters and contain 1 uppercase, 1 lowercase and 1 number.'
      // )
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.username,
        email: values.email,
        password: values.password,
      })
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        // username: 'AlexCross',
        // email: 'acrossall@mail.com',
        // password: 'examplepwd12345',
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
          <ErrorMessage className={css.error} name="username" component="p" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="p" />
        </label>

        <label className={css.passlabel}>Password</label>
        <div className={css.passArea}>
          <Field
            className={css.passInput}
            type={passFieldType ? 'password' : 'text'}
            name="password"
            autoComplete="new-password"
          />
          <button
            className={css.eyeBtn}
            type="button"
            onClick={() => setPassFieldType(!passFieldType)}
          >
            👀
          </button>
        </div>
        <ErrorMessage className={css.error} name="password" component="p" />

        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
