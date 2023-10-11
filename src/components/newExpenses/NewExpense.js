import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ErrorPopUp from "../popUps/ErrorPopUp";
import SucessPopUp from "../popUps/successPopUp" ;
import "../css_files/NewExpenses_css/NewExpense.css";

function NewExpense(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const[sucess, setSucess]=useState(false); 

  function saveExpenseDataHandler(enteredExpenseData) {
    let titleValidator = true;
    let amountValidator = true;

    if (enteredExpenseData.title.trim().length === 0) titleValidator = false;
    if (enteredExpenseData.amount <= 0) amountValidator = false;

    if (titleValidator && amountValidator) {
      const expenseData = {
        ...enteredExpenseData,
      };
      setErrorMessage("");
      setSucess(true);
      props.onAddExpenses(expenseData);
    } else {
      if (!titleValidator) {
        setErrorMessage({
          title: "Invalid Input",
          message: "Enter valid title!",
        });
      } else if (!amountValidator) {
        setErrorMessage({
          title: "Invalid Input",
          message: "Enter valid amount! (>0) ",
        });
      }
    }
  }

  function buttonIsClicked() {
    setSucess(false);
    setErrorMessage(null);
  }

  return (
    <div className="new-expense">
      {errorMessage && (
        <ErrorPopUp
          onclicked={buttonIsClicked}
          title={errorMessage.title}
          message={errorMessage.message}
        />
      )}
      {sucess && <SucessPopUp onclicked={buttonIsClicked} title="Expense Recorded" message="Your expenses is successfully recorder"/>}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
