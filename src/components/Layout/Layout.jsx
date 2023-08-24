import { Outlet } from 'react-router-dom';
import { Header } from './Layout.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
        <AppBar />
      </Header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
