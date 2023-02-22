import React, { useContext } from 'react'
import { Globalcontext } from '../context/Globalstate';

export const Header = () => {
  const {transactions} = useContext(Globalcontext);
  return (
    <h2>EXPENSE TRACKER</h2>
  )
}
