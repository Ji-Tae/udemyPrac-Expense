import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './UI/Card';
import ExpensesFilter from './ExpensesFilter';
function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses Found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    ));
  }
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;