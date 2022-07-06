import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';  
import './Expenses.css'


function Expenses(propsExpense){

    return (
        <Card className="expenses">
            <ExpenseItem 
                title={propsExpense.item[0].title} 
                amount={propsExpense.item[0].amount} 
                date={propsExpense.item[0].date}
            ></ExpenseItem>
        
            <ExpenseItem 
                title={propsExpense.item[1].title} 
                amount={propsExpense.item[1].amount} 
                date={propsExpense.item[1].date}
            ></ExpenseItem>
        
            <ExpenseItem 
                title={propsExpense.item[2].title} 
                amount={propsExpense.item[2].amount} 
                date={propsExpense.item[2].date}
            ></ExpenseItem>
        
            <ExpenseItem 
                title={propsExpense.item[3].title} 
                amount={propsExpense.item[3].amount} 
                date={propsExpense.item[3].date}
            ></ExpenseItem>

            
        </Card>
    );
};

export default Expenses;