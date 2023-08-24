import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelector';
// import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </div>
  );
};
