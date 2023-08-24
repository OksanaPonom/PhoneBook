import { Navlink } from '../Layout/Layout.styled';

export const AuthNav = () => {
  return (
    <div>
      <Navlink to="/login">Login</Navlink>
      <Navlink to="/register">Register</Navlink>
    </div>
  );
};
