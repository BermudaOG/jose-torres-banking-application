import React, { useState, useContext } from 'react';
import Card from './card';
import { UserContext } from './context';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const ctx = useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleLogin(e) {
    e.preventDefault();

    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;

    const user = ctx.users.find((u) => u.email === email && u.password === password);

    if (user) {
      ctx.setCurrentUserEmail(email);
      setStatus('Login successful.');
    } else {
      setStatus('Login failed. Invalid credentials.');
    }
  }

  return (
    <Card
      bgColorClass="bg-success"
      textColorClass="text-white"
      header="Login"
      status={status}
      body={
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      }
    />
  );
}

export default Login;