import "./css_files/ExpenseDate.css";

function ExpenseDate(props) {
  const { date } = props;
  //date is an object thats why we need to break that into different component
  // to use that. Date have numerous other information in it

  const month = date.toLocaleString("en-us", { month: "long" });
  const day = date.toLocaleString("en-us", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
