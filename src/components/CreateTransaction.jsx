import React, { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";

export default function CreateTransaction() {
  const { transactions, addTransaction } = useContext(TransactionContext);

  function getInputValues(e) {
    e.preventDefault();
    let fd = new FormData(e.target);
    const formData = Object.fromEntries(fd.entries());
    addTransaction(formData);
    e.target.reset();
  }

  return (
    <div className="transaction">
      <h2>Add new transaction</h2>
      <div className="line"></div>
      <form onSubmit={getInputValues} className="transactionInputs">
        <div className="textInput">
          <p>Text</p>
          <input type="text" name="name" />
        </div>
        <div className="amountInput">
          <p>Amount</p>
          <input type="number" name="amount" />
        </div>
        <button>Add Transaction</button>
      </form>
    </div>
  );
}
