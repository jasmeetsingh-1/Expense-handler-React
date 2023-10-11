import React, { useState } from "react";
import "./styles.css";
import ExpenseHolder from "./components/ExpenseHolder";
import NewExpense from "./components/newExpenses/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  { id: "e3", title: "book", amount: 30.99, date: new Date(2022, 3, 4) },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e5",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
let dummyYearArray = ["2022", "2021", "2020", "2019"];
export default function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);
  const [yearArray, setYearArray] = useState(dummyYearArray);

  function addExpenseHandler(expense) {
    let dateYear = expense.date.getFullYear().toString();
    setYearArray((prevYearState) => {
      return [...prevYearState, dateYear];
    });

    setExpenses((prevState) => {
      return [...prevState, expense];
    });
  }

  return (
    <div className="App">
      <h1>Expense Handler</h1>
      <NewExpense onAddExpenses={addExpenseHandler} />
      <ExpenseHolder yearsList={yearArray} items={expenses} />
    </div>
  );
}
