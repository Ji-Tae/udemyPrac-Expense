import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpenes({ onAddExpense }) {
  const [editing, setEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseData);
    onAddExpense(expenseData);
    EditingHandler();
  };

  const EditingHandler = () => {
    setEditing(!editing);
  };
  return (
    <div className='new-expense'>
      {!editing && <button onClick={EditingHandler}>Add New Expense</button>}
      {editing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEditing={EditingHandler} />}
    </div>
  );
}

export default NewExpenes;
