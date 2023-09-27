import React, { useContext, useState } from 'react';
import { UserContext } from './context';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './card';

function Deposit() {
  const [depositAmount, setDepositAmount] = useState('');
  const ctx = useContext(UserContext);
  const [status, setStatus] = useState('');

  function validate(amount) {
    if (!amount || isNaN(amount) || amount <= 0) {
      setStatus('Error: Please enter a valid amount to deposit.');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleDeposit() {
    console.log('handleDeposit is being called.');
    if (!validate(depositAmount)) return;

   
    const currentUser = ctx.users.find((user) => user.email === ctx.currentUserEmail);

    
    currentUser.balance += parseFloat(depositAmount);

    setStatus('Deposit successful.');
    setDepositAmount('');
  }

  return (
    <Card
      bgColorClass="bg-danger"
      textColorClass="text-white"
      header="Deposit"
      status={status}
      body={
        <form>
          <div>
            <label htmlFor="depositAmount">Deposit Amount:</label>
            <input
              type="number"
              id="depositAmount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleDeposit}>
            Deposit
          </button>
        </form>
      }
    />
  );
}

export default Deposit;
