import React, {useState} from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState(''); 
    const [enteredAmount, setEnteredAmount] = useState(''); 
    const [enteredDate, setEnteredDate] = useState(''); 

    // const [userInput, setUserInput] = userState({
    //     enteredTitle: '', 
    //     enteredAmount: '', 
    //     enteredDate: ''
    // }); 

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        /* this depends on the previous state instead of free state of approach. 
        Downside of this way is that you can be dependent on outdated or incorrect state snapshot */
        // setUserInput({
        //     ...userInput, //spread operator "..."
        //     enteredTitle: event.target.value, 
        // });

        /* will recieve previous state in the object state. 
        React guarantees schedules state updates that latest snapshot 
        keeping all schedule updates in mind. 
        So this is the safer way to have updated state snapshot. 
        If your state depends on the previous state, use this type of function */
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }; 
        // });
    }; 

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput, 
        //     enteredAmount: event.target.value, 
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput, 
        //     enteredDate: event.target.value, 
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault(); //javascript behavior that will not reload the browser page

        const expenseData = {
            title: enteredTitle, 
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        
        props.onSaveExpenseData(expenseData); 
        setEnteredTitle(''); 
        setEnteredAmount(''); 
        setEnteredDate(''); 
    }; 

    return (
        <form onSubmit={submitHandler}> 
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div> 
                <div className='new-expense__control'>
                    <label>Amount  </label>
                    <input 
                        type="number" 
                        value={enteredAmount}
                        min="0.01" 
                        step='0.01' 
                        onChange={amountChangeHandler}/>
                </div> 
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type="date" 
                        value={enteredDate }
                        min='1990-01-01'  
                        max='2200-01-01' 
                        onChange={dateChangeHandler} />
                </div> 
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;