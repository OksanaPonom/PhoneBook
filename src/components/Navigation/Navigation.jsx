import { Navlink } from '../Layout/Layout.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelector';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <Navlink to="/">Home</Navlink>
      {isLoggedIn && <Navlink to="/phonebook">Phonebook</Navlink>}
    </nav>
  );
};
