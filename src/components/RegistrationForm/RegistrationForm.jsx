import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { registrationValSchema } from '../../service/validationSchemas';
import { registerFormTemplate } from '../../service/formikTemplates/formikTemplates';

const RegistrationForm = () => {
  const [passFieldType, setPassFieldType] = useState(true);
  const dispatch = useDispatch();

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

  const onShowPass = () => {
    setPassFieldType(!passFieldType);
  };

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={registrationValSchema}
      onSubmit={handleSubmit}
    >
      {registerFormTemplate(passFieldType, onShowPass)}
    </Formik>
  );
};

export default RegistrationForm;
