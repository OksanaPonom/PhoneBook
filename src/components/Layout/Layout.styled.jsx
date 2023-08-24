import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto 0 auto;
  padding: 20px 30px;
  background: linear-gradient(
    0deg,
    rgba(5, 5, 5, 0.412) 40%,
    rgba(10, 10, 10, 0.548) 90%
  );
  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.75);
`;

export const Navlink = styled(NavLink)`
  position: relative;
  font-weight: 600;
  font-size: 30px;
  color: #000;
  transition: color 250ms linear;
  &:not(:last-child) {
    margin-right: 36px;
  }
  &:first-child {
    margin-left: 0;
  }
  &:hover,
  &:focus {
    color: rgb(30, 0, 255);
  }
  &.active {
    color: #590be9;

    text-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
      0 0 18px rgba(255, 255, 255, 0.5);
  }
`;
