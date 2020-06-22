import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header.js';
import { Balance } from './components/Balance.js';
import { IncomExpenses } from './components/IncomExpenses.js';
import { TransactionList } from './components/TransactionList.js';
import { AddTransaction } from './AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import { Footer } from './components/Footer.js';


function App() {
  return (
    <GlobalProvider>
     
     <div className="container">
     <Header />
       <Balance />
       <IncomExpenses />
       <TransactionList />
       <AddTransaction />

     </div>
     <Footer/>

    </GlobalProvider>
  );
}

export default App;
