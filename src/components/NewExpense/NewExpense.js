import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isAdding, setCloseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setCloseForm(!isAdding);
  };

  const addExpenseHandler = () => {
    setCloseForm(!isAdding);
  };

  return (
    <div className="new-expense">
      {!isAdding && (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      )}
      {isAdding && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={addExpenseHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
