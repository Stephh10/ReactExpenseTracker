import React from "react";
import Item from "./Item";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

export default function History() {
  const { transactions } = useContext(TransactionContext);

  const noItems = transactions.length === 0;
  return (
    <div className="history">
      <h2>History</h2>
      <div className="line"></div>

      {noItems && <p className="historyResponse">No History recorded</p>}
      <ul className="historyItems">
        {transactions.map((item, index) => (
          <Item key={index} value={item} />
        ))}
        {/* <li className="item income">
          <p>Cash</p>
          <p>+100</p>
        </li>
        <li className="item">
          <p>Cash</p>
          <p>+100</p>
        </li>
        <li className="item">
          <p>Cash</p>
          <p>+100</p>
        </li> */}
      </ul>
    </div>
  );
}
