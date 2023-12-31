import React, { useState, useEffect } from "react";
import "../css_files/ExpenseFilter.css";

function ExpensesYearFilter(props) {
  const [enteredYear, setEnteredYear] = useState("2021");
  const [yearsDataToInt, setYearsDataToInt] = useState([]);

  useEffect(() => {
    const sortedArray = [...props.yearsData]
      .filter((value) => !isNaN(value))
      .sort((a, b) => a - b);

    const uniqueArray = sortedArray.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    setYearsDataToInt(uniqueArray);
  }, [props.yearsData]);
  function dropdownChangeHandler(event) {
    setEnteredYear(event.target.value);
    props.onChangeFilter(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={enteredYear} onChange={dropdownChangeHandler}>
          {yearsDataToInt.map((ele) => (
            <option key={ele} value={ele}>
              {ele}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ExpensesYearFilter;
