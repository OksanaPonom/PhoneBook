import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from './Layout/Layout';
import { Loader } from './Loader/Loader';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/auth/authSelector';

const Home = lazy(() => import('Pages/Home/Home'));
const Phonebook = lazy(() => import('Pages/Phonebook/Phonebook'));
const Login = lazy(() => import('Pages/Login/Login'));
const Register = lazy(() => import('Pages/Register/Register'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/PhoneBook"
          element={
            <PrivateRoute redirectTo="/login" component={<Phonebook />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Login />} />
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
