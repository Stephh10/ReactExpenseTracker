import { createContext, useReducer } from "react";
import { TransactionReducer } from "./TransactionReducer";

export const TransactionContext = createContext({
  transactions: [],
  addTransaction: () => {},
  removeTransaction: () => {},
});

export function TransactionContextProvider({ children }) {
  const [state, dispatch] = useReducer(TransactionReducer, {
    transactions: [{ name: "mangoo", amount: 22, id: 1 }],
  });

  function addTransaction(newItem) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: { ...newItem, id: Math.random() * 1000 },
    });
  }

  function removeTransaction(id) {
    dispatch({
      type: "REMOVE_TRANSACTION",
      payload: id,
    });
  }

  const transactionsContext = {
    transactions: state.transactions,
    addTransaction,
    removeTransaction,
  };
  return (
    <TransactionContext.Provider value={transactionsContext}>
      {children}
    </TransactionContext.Provider>
  );
}
