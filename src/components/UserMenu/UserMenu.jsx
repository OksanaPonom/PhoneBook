import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelector';
import { Box, Btn, SubText, Text } from './UserMenu.styled';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box>
      <Text>
        Welcome, <SubText>{user.name}</SubText>
      </Text>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn>
    </Box>
  );
};
