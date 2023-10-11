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
    setEnteredMonth(event.target.value);
  }

  props.onMonthChangeFilter(enteredMonth);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Month</label>
        <select onChange={monthDropdownChangeHandler}>
          {monthOptions.map((ele) => {
            return <option value={ele}>{ele}</option>;
          })}
          {/* <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option> */}
        </select>
      </div>
    </div>
  );
}

export default ExpensesMonthFilter;
