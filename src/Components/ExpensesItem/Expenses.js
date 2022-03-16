import React, { useState } from "react";
import Card from "../Card/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesItem from "./ExpensesItem";

export default function Expenses(props) {
  // let defaultFilter = new Date().getFullYear().toString();

  const [addfilter, setFilter] = useState("All");

  const addFilterHandler = (newFilter) => {
    setFilter(newFilter);
  };

  let filteredExpenses;

  addfilter === "All"
    ? (filteredExpenses = props.data)
    : (filteredExpenses = props.data.filter(
        (el) => el.date.getFullYear().toString() === addfilter
      ));

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={addfilter}
          year={props.data}
          onChangeFilter={addFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {expensesContent}
      </Card>
    </div>
  );
}
