import React from "react";
import "./ExpenseFilter.css";

export default function ExpenseFilter(props) {
  const selectFilterHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  const years = [
    ["All"],
    ...new Set(
      props.year
        .map((el) => {
          return el.date.getFullYear().toString();
        })
        .reverse()
    ),
  ];

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectFilterHandler}>
          {years.map((el, key) => {
            return (
              <option key={key} value={el}>
                {el}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
