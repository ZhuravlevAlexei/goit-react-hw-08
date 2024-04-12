import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './AppBar.module.css';

const AppBar = () => {
  //comments for testing about {} why isLoggedIn undefined
  // const { isLoggedIn } = useSelector(selectIsLoggedIn);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // console.log('isLoggedIn AppBar: ', isLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
