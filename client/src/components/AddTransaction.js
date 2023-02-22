import React, { useContext } from 'react'
import { useState } from 'react'
import { Globalcontext } from '../context/Globalstate';

export const AddTransaction = () => {
    const {addTransaction} = useContext(Globalcontext);
    const {transactions} = useContext(Globalcontext);
    const [text,setText] = useState('');
    const [amount,setAmount] = useState('');
    const fun = e => {
        e.preventDefault();
        const newtran = {
            id : transactions.length + 1,
            text,
            amount:parseInt(amount)
        }
      addTransaction(newtran);
      setText('');
      setAmount('');
    } 
  return (
    <>
         <h3>Add new transaction</h3>
      <form  onSubmit = {fun}  >
        <div className="form-control" >
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter Text" value = {text} onChange = {(e)=>(setText(e.target.value))} />
        </div>
        <div className ="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"  placeholder="Enter amount..."  value = {amount} onChange = {(e)=>(setAmount(e.target.value))} />
        </div>
        <button className ="btn">Add transaction</button>
      </form>
      
    </>
  )
}
