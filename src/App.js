import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header";
import "./styles.css";
import ExpenseHolder from "./components/ExpenseHolder";
import NewExpense from "./components/newExpenses/NewExpense";

let dummyYearArray = ["2022", "2021", "2020", "2019"];

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const expenseArray = Object.values(state).map((item) => {
    return { ...item, date: new Date(item.date) };
  });

  const [yearArray, setYearArray] = useState(dummyYearArray);

  const yearCheck = useCallback(
    (yearEntered) => {
      return !yearArray.includes(yearEntered);
    },
    [yearArray]
  );

  function addExpenseHandler(expense) {
    let dateYear = expense.date.getFullYear().toString();
    if (yearCheck(dateYear)) {
      setYearArray((prevYearState) => {
        return [...prevYearState, dateYear];
      });
    }

    dispatch({ type: "add", data: expense });
  }

  useEffect(() => {
    const yearsToAdd = expenseArray.map((item) => {
      if (yearCheck(item.date.getFullYear().toString())) {
        return item.date.getFullYear().toString();
      }
      return null; // Ensure a value is returned in all cases
    });

    yearsToAdd.forEach((item) => {
      if (item) {
        if (yearCheck(item)) {
          setYearArray((prevYearState) => {
            return [...prevYearState, item];
          });
        }
      }
    });
  }, [expenseArray, yearCheck]);

  return (
    <div className="App">
      <Header>Expense Handler</Header>
      <NewExpense onAddExpenses={addExpenseHandler} />
      <ExpenseHolder yearsList={yearArray} items={expenseArray} />
    </div>
  );
}
