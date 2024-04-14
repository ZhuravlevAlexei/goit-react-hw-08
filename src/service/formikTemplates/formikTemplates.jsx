import { ErrorMessage, Field, Form } from 'formik';
import css from './formikTemplates.module.css';
export function contactFormTemplate(
  showAddButton = true,
  showEditButton = false,
  closeEditModal
) {
  return (
    <Form className={css.contactForm}>
      <label className={css.contactLabel}>
        <span className={css.contactInput}>Name</span>
        <Field className={css.contactInput} type="text" name="name" />
        <ErrorMessage className={css.contactError} component="p" name="name" />
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
      {showAddButton && (
        <div className={css.buttonWrapper}>
          <button className={css.addBtn} type="submit">
            Add contact
          </button>
        </div>
      )}
      {showEditButton && (
        <div className={css.buttonWrapper}>
          <button className={css.delButton} type="submit">
            Done
          </button>
          <button className={css.delButton} onClick={() => closeEditModal()}>
            Cancel
          </button>
        </div>
      )}
    </Form>
  );
}

export function loginFormTemplate(passFieldType, onShowPass) {
  return (
    <Form className={css.form}>
      <label className={css.label}>
        Email
        <Field className={css.input} type="email" name="email" />
        <ErrorMessage className={css.error} name="email" component="p" />
      </label>
      <div className={css.passArea}>
        <Field
          className={css.passInput}
          type={passFieldType ? 'password' : 'text'}
          name="password"
          autoComplete="common-password"
        />
        <button className={css.eyeBtn} type="button" onClick={onShowPass}>
          👀
        </button>
      </div>
      <ErrorMessage className={css.error} name="password" component="p" />
      <button className={css.btn} type="submit">
        Log in
      </button>
    </Form>
  );
}

//

export function registerFormTemplate(passFieldType, onShowPass) {
  return (
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
        <button className={css.eyeBtn} type="button" onClick={onShowPass}>
          👀
        </button>
      </div>{' '}
      <ErrorMessage className={css.error} name="password" component="p" />
      <button className={css.btn} type="submit">
        Register
      </button>
    </Form>
  );
}
