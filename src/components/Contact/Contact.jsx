import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import Modal from 'react-modal';
import css from './Contact.module.css';
import { useState } from 'react';
import { contactValSchema } from '../../service/validationSchemas';
import { contactFormTemplate } from '../../service/formikTemplates/formikTemplates';

const Contact = ({ id, name, number, deleteContact }) => {
  const [modalDellIsOpen, setModalDelIsOpen] = useState(false);
  const [modalEditlIsOpen, setModaEditlDelIsOpen] = useState(false);
  const dispatch = useDispatch();

  const closeEditModal = answer => {
    setModaEditlDelIsOpen(false);
    // if (answer) dispatch(editContact({ id, name, number }));
  };

  const closeModal = answer => {
    setModalDelIsOpen(false);
    if (answer) dispatch(deleteContact(id));
  };
  const handleDelete = () => {
    setModalDelIsOpen(true);
  };
  const handleEdit = () => {
    setModaEditlDelIsOpen(true);
  };

  const handleSubmit = (values, actions) => {
    // dispatch(editContact({ id, name: values.name, number: values.number }));
    actions.resetForm();
  };

  Modal.setAppElement('#root');
  return (
    <>
      <Modal
        className={css.modalOverlay}
        isOpen={modalDellIsOpen}
        contentLabel="Delete contact"
      >
        <div className={css.modal}>
          <p>Are sure you want to delete {name} contact?</p>
          <div className={css.modalBtnWrap}>
            <button className={css.delButton} onClick={() => closeModal(true)}>
              Yes
            </button>
            <button className={css.delButton} onClick={() => closeModal(false)}>
              No
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        className={css.modalOverlay}
        isOpen={modalEditlIsOpen}
        contentLabel="Delete contact"
      >
        <div className={css.modal}>
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

          <div className={css.modalBtnWrap}>
            <button
              className={css.delButton}
              onClick={() => closeEditModal(true)}
            >
              Done
            </button>
            <button
              className={css.delButton}
              onClick={() => closeEditModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
      <li className={css.contItem}>
        <div className={css.textBoxWrap}>
          <span className={css.spanThumb}>
            <FaUser className={css.iconArea} />
            {name}
          </span>
          <span className={css.spanThumb}>
            <FaPhoneAlt className={css.iconArea} />
            {number}
          </span>
        </div>
        <div className={css.btnWrap}>
          <button className={css.delButton} type="button" onClick={handleEdit}>
            Edit
          </button>
          <button
            className={css.delButton}
            type="button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default Contact;
