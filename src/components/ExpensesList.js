import ExpenseItems from "./ExpenseItem";
import "./css_files/ExpenseList.css";

function ExpenseList(props) {
  if (props.item.length === 0) {
    return (
      <h2 style={{ margin: "3rem 0" }} className="expense-list_fallback">
        No Expense found.
      </h2>
    );
  }
  return (
    <ul className="expense-list" style={{ padding: "0" }}>
      {props.item.map((ele) => (
        <ExpenseItems
          key={ele.id}
          title={ele.title}
          amount={ele.amount}
          date={ele.date}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
