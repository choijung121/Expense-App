import React, { useState } from 'react'; 

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css'

const DUMMY_EXPENSES = [
  {
    id: 'e1', 
    title: 'Toilet Paper', 
    amount: 94.12,
    date: new Date(2022, 4, 30)
  },
  {
    id: 'e2', 
    title: 'iPhone', 
    amount: 999,
    date: new Date(2022, 2, 24)
  },
  {
    id: 'e3', 
    title: 'Macbook Pro', 
    amount: 1300,
    date: new Date(2022, 1, 21)
  },
  {
    id: 'e4', 
    title: 'Juice', 
    amount: 5,
    date: new Date(2022, 3, 23)
  },
];

const App = () => {
  const [expenses, setExpenses ] = useState(DUMMY_EXPENSES); 

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]; 
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses}></Expenses>
    </div>
  );
};

export default App;
