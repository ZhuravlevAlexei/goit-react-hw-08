import { useDispatch } from 'react-redux';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({ id, name, number, deleteContact }) => {
  const dispatch = useDispatch();

  return (
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
      <button
        className={css.delButton}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
