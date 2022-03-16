import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    closeActionHandler();
  };

  const [action, setAction] = useState(false);

  const setActionHandler = () => {
    setAction(true);
  };

  const closeActionHandler = () => {
    setAction(false);
  };

  return (
    <div className="new-expense">
      {action ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          closeFrom={closeActionHandler}
        />
      ) : (
        <div className="new-expenses__actions">
          <button onClick={setActionHandler}>Add new Expense</button>
        </div>
      )}
    </div>
  );
}
