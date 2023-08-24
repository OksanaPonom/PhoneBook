import { useDispatch } from 'react-redux';
import { Form, Input, Btn } from './Login.styled';
import React, { useState } from 'react';
import { logIn } from 'redux/auth/authOperations';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    setEmail('');
    setPassword('');
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        autoComplete="off"
        autoFocus
        placeholder="Input your email "
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <Input
        name="password"
        type="password"
        autoComplete="off"
        autoFocus
        placeholder="Password "
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Btn type="submit">LOG IN</Btn>
    </Form>
  );
};

export default Login;
