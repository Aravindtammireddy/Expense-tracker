import React, { useContext } from 'react'
import { Globalcontext } from '../context/Globalstate';

export const Balance = () => {
 const  {transactions} = useContext(Globalcontext);
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>balance <span>${total}</span></div>
  )
}
