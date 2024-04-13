import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom'; // може пограюсь з цим ще
import AppBar from '../AppBar/AppBar';
import Loader from '../Loader/Loader';

import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={css.layputArea}>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};

export default Layout;
