import * as Yup from 'yup';

const nameValSchema = Yup.string()
  .min(3, 'Must be at least 3 characters')
  .max(40, 'Must be max 40 characters or less')
  .matches(
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  )
  .required('Required');

const numberValSchema = Yup.string()
  .min(
    10,
    'Must be at least 10 digits. If you have 8 or less, add few 0 in front to match format'
  )
  .max(20, 'Must be max 20 digits')
  .matches(
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
  )
  .required('Required');

const emailValSchema = Yup.string()
  .max(40, 'Must be max 40 characters or less')
  .matches(
    /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'Enter a valid email address, for example "nJ8pN@example.com".'
  )
  .required('Required');

const usernameValSchema = Yup.string()
  .min(4, 'Must be at least 4 characters')
  .max(40, 'Must be max 16 characters or less')
  .matches(
    /^[a-zA-Z0-9_.-]{4,40}$/,
    'Username may contain only letters, numbers, underscores, dots.'
  )
  .required('Required');

const passwordValSchema = Yup.string()
  .min(3, 'Must be at least 3 characters')
  .max(20, 'Must be max 20 characters or less')
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{3,20}$/,
  //   'Password must be at least 3 up to 20 characters and contain 1 uppercase, 1 lowercase and 1 number.'
  // )
  .required('Required');

export const contactValSchema = Yup.object({
  name: nameValSchema,
  number: numberValSchema,
});

export const registrationValSchema = Yup.object({
  username: usernameValSchema,
  email: emailValSchema,
  password: passwordValSchema,
});

export const loginValSchema = Yup.object({
  email: emailValSchema,
  password: passwordValSchema,
});
