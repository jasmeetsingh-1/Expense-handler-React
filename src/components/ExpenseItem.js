import React from "react";

import "./css_files/ExpenseItem_styling.css";
import "./css_files/ExpenseDate.css";

import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItems(props) {
  return (
    <li className="expense_li">
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2 className="expense-heading">{props.title}</h2>
          {/* here now we have to use the title because with it .. our function is updating the title variable values 
          so use it so that when funciton update its value it get reflected onto the page  */}
          <div className="expense-item__price">₹{props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItems;
