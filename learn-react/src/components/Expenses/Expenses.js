import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';  
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'


function Expenses(props){
    const currentYear = new Date().getFullYear(); 
    const [filteredYear, setFilteredYear] = useState(currentYear); 

    const filterChangeHandler = selectYear => {
        setFilteredYear(selectYear); 
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected = {filteredYear} 
                    onChangeFilter = {filterChangeHandler}
                />
                {props.item.map((expense) => (
                    <ExpenseItem 
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;