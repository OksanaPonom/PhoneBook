import React, { useState } from 'react';
import { Btn, Form, Input } from './Register.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    setEmail('');
    setPassword('');
    setName('');
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="name"
        type="name"
        autoComplete="off"
        autoFocus
        placeholder="Input your name "
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Input
        name="email"
        type="email"
        autoComplete="off"
        placeholder="Input your email "
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <Input
        name="password"
        type="password"
        autoComplete="off"
        minLength={7}
        placeholder="Password "
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Btn type="submit" disabled={!email || !password || !name}>
        REGISTER
      </Btn>
    </Form>
  );
};
export default Register;
