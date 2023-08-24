import styled from 'styled-components';
export const Box = styled.div`
  display: flex;
  gap: 15px;
`;
export const Text = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin: 0;
`;
export const Btn = styled.button`
  display: block;

  padding: 8px 8px;
  border-radius: 12px;
  font-size: 20px;
  background-color: rgba(30, 0, 255, 0.496);
  border: none;
  outline: none;
  cursor: pointer;
  transition: box-shadow 250ms ease-in;
  &:disabled {
    background-color: rgba(0, 255, 255, 0.688);
  }
  &:hover,
  &:focus {
    box-shadow: 3px 1px 32px 0px rgba(28, 18, 227, 1);
  }
`;
export const SubText = styled.span`
  font-weight: 700;
`;
