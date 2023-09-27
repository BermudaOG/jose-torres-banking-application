import React, { useContext, useState } from 'react';
import { UserContext } from './context';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './card';

function Withdraw() {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const ctx = useContext(UserContext);
  const [status, setStatus] = useState('');

  function validate(amount) {
    if (!amount || isNaN(amount) || amount <= 0) {
      setStatus('Error: Please enter a valid amount to withdraw.');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleWithdraw() {
    console.log('handleWithdraw is being called.');
    if (!validate(withdrawAmount)) return;

    const currentUser = ctx.users.find((user) => user.email === ctx.currentUserEmail);

    if (currentUser.balance < withdrawAmount) {
      setStatus('Error: Insufficient balance.');
      return;
    }

    currentUser.balance -= parseFloat(withdrawAmount);

    setStatus('Withdrawal successful.');
    setWithdrawAmount('');
  }

  return (
    <Card
      bgColorClass="bg-warning"
      textColorClass="text-dark"
      header="Withdraw"
      status={status}
      body={
        <form>
          <div>
            <label htmlFor="withdrawAmount">Withdraw Amount:</label>
            <input
              type="number"
              id="withdrawAmount"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleWithdraw}>
            Withdraw
          </button>
        </form>
      }
    />
  );
}

export default Withdraw;
