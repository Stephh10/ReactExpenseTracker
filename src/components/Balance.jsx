import React from "react";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

export default function Balance() {
  const { transactions } = useContext(TransactionContext);

  const allTransactions = transactions.map((item) => parseFloat(item.amount));

  const income = allTransactions
    .filter((item) => item >= 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = allTransactions
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  const balance = allTransactions.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="balance">
      <h3>YOUR BALANCE</h3>
      <h1>${balance}</h1>
      <div className="balanceWrapper">
        <div className="balanceItem">
          <h5>INCOME</h5>
          <h5 className="inBalance">${income}</h5>
        </div>
        <div className="balanceItem">
          <h5>EXPENSE</h5>
          <h5 className="exBalance">${expense}</h5>
        </div>
      </div>
    </div>
  );
}
