import { useDispatch } from 'react-redux';
import { Form, Input, Btn } from './Login.styled';
import React from 'react';
import { logIn } from 'redux/auth/authOperations';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        autoComplete="off"
        autoFocus
        placeholder="Input your email "
      />

      <Input
        name="password"
        type="password"
        autoComplete="off"
        autoFocus
        placeholder="Password "
      />
      <Btn type="submit">LOG IN</Btn>
    </Form>
  );
};

export default Login;
