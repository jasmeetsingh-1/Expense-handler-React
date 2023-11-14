import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header";
import "./styles.css";
import ExpenseHolder from "./components/ExpenseHolder";
import NewExpense from "./components/newExpenses/NewExpense";

// const dummyExpenses = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
//   { id: "e3", title: "book", amount: 30.99, date: new Date(2022, 3, 4) },
//   {
//     id: "e4",
//     title: "Car Insurance",
//     amount: 294.67,
//     date: new Date(2020, 2, 28),
//   },
//   {
//     id: "e5",
//     title: "New Desk (Wooden)",
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];
let dummyYearArray = ["2022", "2021", "2020", "2019"];
export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const expenseArray = Object.values(state).map((item) => {
    return { ...item, date: new Date(item.date) };
  });

  // const [expenses, setExpenses] = useState(dummyExpenses);
  const [yearArray, setYearArray] = useState(dummyYearArray);

  function yearCheck(yearEntered) {
    let flag = true;
    yearArray.map((ele) => {
      if (ele === yearEntered) flag = false;
      return null;
    });
    return flag;
  }

  function addExpenseHandler(expense) {
    let dateYear = expense.date.getFullYear().toString();
    if (yearCheck(dateYear)) {
      setYearArray((prevYearState) => {
        return [...prevYearState, dateYear];
      });
    }

    dispatch({ type: "add", data: expense });
    // setExpenses((prevState) => {
    //   return [...prevState, expense];
    // });
  }

  useEffect(() => {
    //check here for the expenseArray
    {
      const yearsToAdd = expenseArray.map((item) => {
        if (yearCheck(item.date.getFullYear().toString()))
          return item.date.getFullYear().toString();
      });

      yearsToAdd.map((item) => {
        if (item) {
          if (yearCheck(item)) {
            setYearArray((prevYearState) => {
              return [...prevYearState, item];
            });
          }
        }
      });
      console.log("years to add >>>>", yearsToAdd);
    }
    console.log("app expenseArray>>>>>>>>>", expenseArray);
  }, [expenseArray, yearCheck]);

  return (
    <div className="App">
      <Header>Expense Handler</Header>
      <NewExpense onAddExpenses={addExpenseHandler} />
      <ExpenseHolder yearsList={yearArray} items={expenseArray} />
    </div>
  );
}
