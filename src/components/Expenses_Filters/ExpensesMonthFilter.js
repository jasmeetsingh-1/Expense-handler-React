import React, { useState } from "react";

function ExpensesMonthFilter(props) {
  const monthOptions = [
    "All",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const [enteredMonth, setEnteredMonth] = useState("All");

  function monthDropdownChangeHandler(event) {
    const selectedMonth = event.target.value;
    setEnteredMonth(selectedMonth);
    props.onMonthChangeFilter(selectedMonth);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Month</label>
        <select onChange={monthDropdownChangeHandler}>
          {monthOptions.map((ele, index) => {
            return <option key={index} value={ele}>{ele}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default ExpensesMonthFilter;
