import React, { useContext } from 'react'
import { Globalcontext } from '../context/Globalstate';

export const Income = () => {
  const {transactions} = useContext(Globalcontext);
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item>0?item:0), 0).toFixed(2);
  const spends = Math.abs(amounts.reduce((acc, item) => (acc += item<0?item:0), 0).toFixed(2));
  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p className="money plus">+${total}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p className="money minus">-${spends}</p>
    </div>
  </div>
  )
}
