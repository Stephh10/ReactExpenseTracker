import React from "react";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

export default function Item({ value }) {
  const { removeTransaction } = useContext(TransactionContext);
  const styles = value.amount >= 0 ? "income" : "expense";
  return (
    <li className={`item ${styles}`}>
      <div className="itemActions">
        <button onClick={() => removeTransaction(value.id)}>X</button>
        <p>{value.name}</p>
      </div>

      <p>${value.amount}</p>
    </li>
  );
}
