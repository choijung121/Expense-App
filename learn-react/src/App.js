import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css'

function App() {
  const expenses = [
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

  const addExpenseHandler = expense => {
    console.log('In App.js'); 
    console.log(expense); 
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses}>{expenses}</Expenses>
    </div>
  );
}

export default App;
