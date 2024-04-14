import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import Modal from 'react-modal';
import { useState } from 'react';

import { contactValSchema } from '../../service/validationSchemas';
import { contactFormTemplate } from '../../service/formikTemplates/formikTemplates';
import { deleteContact, udateContact } from '../../redux/contacts/operations';

import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const [modalDellIsOpen, setModalDelIsOpen] = useState(false);
  const [modalEditlIsOpen, setModaEditlIsOpen] = useState(false);
  const dispatch = useDispatch();

  const closeDelModal = answer => {
    setModalDelIsOpen(false);
    if (answer) dispatch(deleteContact(id));
  };

  const closeEditModal = () => {
    setModaEditlIsOpen(false);
  };

  const handleDelete = () => {
    setModalDelIsOpen(true);
  };
  const handleEdit = () => {
    setModaEditlIsOpen(true);
  };

  const handleSubmitEditModal = ({ name, number }) => {
    dispatch(udateContact({ id, name, number }));
    setModaEditlIsOpen(false);
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
            <button
              className={css.delButton}
              onClick={() => closeDelModal(true)}
            >
              Yes
            </button>
            <button
              className={css.delButton}
              onClick={() => closeDelModal(false)}
            >
              No
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        className={css.modalOverlay}
        isOpen={modalEditlIsOpen}
        contentLabel="Edit contact"
      >
        <div className={css.modal}>
          <p>Edit contact</p>
          <Formik
            initialValues={{
              name: name,
              number: number,
            }}
            validationSchema={contactValSchema}
            onSubmit={handleSubmitEditModal}
          >
            {contactFormTemplate(false, true, closeEditModal)}
          </Formik>
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
