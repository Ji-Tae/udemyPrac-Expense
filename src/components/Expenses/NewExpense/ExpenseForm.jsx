import React, { useState } from 'react';
import './ExpenseForm.css';
function ExpenseForm({ onSaveExpenseData, onStopEditing }) {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });
  const titleChangeHandler = (e) => {
    setUserInput((prev) => {
      return { ...prev, enteredTitle: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    setUserInput((prev) => {
      return { ...prev, enteredAmount: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput((prev) => {
      return { ...prev, enteredDate: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    });
    onSaveExpenseData(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} value={userInput.enteredTitle} required />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
            required
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
            required
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={onStopEditing}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
