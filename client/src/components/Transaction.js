import React, { useContext } from 'react'
import { Globalcontext } from '../context/Globalstate';

export const Transaction = ({transaction}) => {
  const {delelteTransaction} = useContext(Globalcontext);
  const sign = transaction.amount<0 ? '-':'';
  const clas = sign==='-'?'minus':'plus';
  return (
      <li className={clas} key={transaction.text}>
        {transaction.text}  <span>{sign}${Math.abs(transaction.amount)} </span> <button className='delete-btn' onClick={() => delelteTransaction(transaction._id)}>x</button>
      </li>
  )
}
