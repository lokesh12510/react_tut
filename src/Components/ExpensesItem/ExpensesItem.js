import React from "react";
import Card from "../Card/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpensesItem.css";

export default function ExpensesItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
