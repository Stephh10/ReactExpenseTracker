import React from "react";

export default function History() {
  return (
    <div className="history">
      <h2>History</h2>
      <div className="line"></div>
      <ul className="historyItems">
        <li className="item income">
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
        </li>
      </ul>
    </div>
  );
}
