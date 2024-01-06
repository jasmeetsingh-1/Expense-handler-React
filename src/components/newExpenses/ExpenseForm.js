import React, { useState } from "react";

import "../css_files/NewExpenses_css/ExpenseForm.css";
function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function inputHandler(id, value) {
    if (id === "title") {
      setEnteredTitle(value);
    } else if (id === "amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="titleInput">Title</label>
          <input
            type="text"
            id="titleInput"
            value={enteredTitle}
            onChange={(event) => {
              inputHandler("title", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amountInput">Amount (₹)</label>
          <input
            type="number"
            step="1"
            id="amountInput"
            value={enteredAmount}
            onChange={(event) => {
              inputHandler("amount", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="dateInput">Date</label>
          <input
            type="date"
            min="1800-01-01"
            max="3000-12-31"
            id="dateInput"
            value={enteredDate}
            onChange={(event) => {
              inputHandler("date", event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add expense </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
