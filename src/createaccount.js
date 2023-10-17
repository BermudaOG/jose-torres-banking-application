import React, { useContext, useState } from 'react';
import { UserContext } from './context';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './card';

function CreateAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const ctx = useContext(UserContext);
  const [status, setStatus] = useState('');
  const [show, setShow] = useState(true);

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;

    ctx.addUser({ name, email, password, balance: 100 });

    
    setStatus('Account created successfully.');

    
    clearForm();
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgColorClass="bg-primary"
      textColorClass="text-white"
      header="Create Account"
      body={
        <div>
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <button type="button" onClick={handleCreate}>
              Create Account
            </button>
          </form>

          {status && (
            <div className="alert alert-success mt-3">{status}</div>
          )}
        </div>
      }
    />
  );
}

export default CreateAccount;