import React, { useContext , useEffect} from 'react';
import {Transaction} from './Transaction';
import { Globalcontext } from '../context/Globalstate';


export const Trasactionlist = () => {
  const {transactions,gettransactions } = useContext(Globalcontext);
  useEffect(() => {
    gettransactions();
  },[]);
  return (
    <ul className='list'>
      { transactions.map((transaction)  => (<Transaction key = {transaction.text} transaction = {transaction} /> ))}
    </ul>
  )
}
