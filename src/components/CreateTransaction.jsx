import React from "react";

export default function CreateTransaction() {
  return (
    <div className="transaction">
      <h2>Add new transaction</h2>
      <div className="line"></div>
      <div className="transactionInputs">
        <div className="textInput">
          <p>Text</p>
          <input type="text" />
        </div>
        <div className="amountInput">
          <p>Amount</p>
          <input type="text" />
        </div>
        <button>Add Transaction</button>
      </div>
    </div>
  );
}
