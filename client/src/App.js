import './App.css';
import React from 'react';
import {Balance}  from './components/Balance';
import {Header}  from './components/Header';
import {Income}  from './components/Income';
import {Trasactionlist} from './components/Trasactionlist';
import { AddTransaction } from './components/AddTransaction';
import {GlobalProvider} from './context/Globalstate';

function App() {

  return (
    <GlobalProvider >
        <Header />
        <Balance  />
        <Income  />
        <Trasactionlist  />
        <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
