import { useSelector, useDispatch } from 'react-redux';
import css from './SearchBox.module.css';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice.js';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  return (
    <label className={css.contactLabel}>
      Find contacts by name
      <input
        className={css.contactInput}
        type="text"
        name="filter"
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.currentTarget.value))}
      />
    </label>
  );
};

export default SearchBox;
