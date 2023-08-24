import styled from 'styled-components';
export const Form = styled.form`
  width: 700px;
  padding: 60px 60px 30px 60px;

  text-align: center;
  margin: 20vh auto;
  background-color: rgba(79, 122, 232, 0.412);
  border: 4px solid #17096969;
  border-radius: 16px;
  box-shadow: 1px -2px 29px 13px rgba(0, 0, 0, 0.57);
  text-align: center;
`;
export const Input = styled.input`
  display: block;
  width: 450px;
  padding: 10px;
  font-size: 20px;
  margin: 0 auto 20px auto;

  border-radius: 12px;
  outline: none;
  border-color: #0000ffe0;

  &:hover,
  &:focus {
    box-shadow: 3px 1px 32px 0px rgba(28, 18, 227, 1);
  }
`;
export const Btn = styled.button`
  display: block;
  margin: 40px auto 0 auto;
  padding: 16px 28px;
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
