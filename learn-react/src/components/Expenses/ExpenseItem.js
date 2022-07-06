import React, { useState } from 'react'; 

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'; 
import './ExpenseItem.css';

function ExpenseItem(propsExpenseData) {
    //function clickHandler() {}
    const [title, setTitle] = useState(propsExpenseData.title); 
    console.log('Expense evaluated by react'); 

    const clickHandler = () => {
        setTitle('Updated!'); 
        console.log(title);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={propsExpenseData.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2> 
                <div className='expense-item__price'>${propsExpenseData.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title!!!!! Changing Title!!!!</button> 
        </Card> 
    );
}

export default ExpenseItem; 