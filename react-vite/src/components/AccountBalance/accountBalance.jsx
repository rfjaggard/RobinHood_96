import React from 'react';

function AccountBalance({ balance }) {
  return (
    <div className="account-balance">
      <h2>Account Balance</h2>
      <p><strong>Balance:</strong> ${balance.toFixed(2)}</p>
    </div>
  );
}

export default AccountBalance;
