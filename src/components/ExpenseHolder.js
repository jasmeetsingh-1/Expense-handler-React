import { useState } from "react";
import "./css_files/ExpenseItem_styling.css";

import Card from "./Card";
// import ExpensesYearFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpensesYearFilter from "../components/Expenses_Filters/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesMonthFilter from "./Expenses_Filters/ExpensesMonthFilter";

function ExpenseHolder(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const [fitleredMonth, setFitleredMonth] = useState("All");

  function filterChangeHandler(enteredYear) {
    setFilteredYear(enteredYear);
  }

  function monthFilterChangeHandler(enteredMonth) {
    setFitleredMonth(enteredMonth);
  }

  const filteredExpenses = props.items.filter((ele) => {
    return ele.date.getFullYear().toString() === filteredYear;
  });
  let finalExpenses = [];
  if (fitleredMonth === "All") {
    finalExpenses = [...filteredExpenses];
  } else {
    finalExpenses = filteredExpenses.filter((ele) => {
      const eleDate = new Date(ele.date);
      const options = { month: "long" };
      const eleMonth = eleDate.toLocaleString("en-US", options);

      return eleMonth === fitleredMonth;
    });
  }
  //props.items.filter(//now here function basically condition)
  //as we called arrow function .. everytime this function return a true value
  //that ele will be stored in our new array "filteredExpenses"

  return (
    <div>
      <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesYearFilter
          yearsData={props.yearsList}
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesMonthFilter
          selected={fitleredMonth}
          onMonthChangeFilter={monthFilterChangeHandler}
        />
        <ExpenseList item={finalExpenses} />
      </Card>
    </div>
  );
}

export default ExpenseHolder;
