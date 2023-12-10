import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Nav, StyledNavLink } from '../Layout/Layout.styled';
import { IoHomeOutline } from 'react-icons/io5';
import { RiMovie2Line } from 'react-icons/ri';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledNavLink to="/">
            Home
            <IoHomeOutline />
          </StyledNavLink>
          <StyledNavLink to="/movies">
            Movies
            <RiMovie2Line />
          </StyledNavLink>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
