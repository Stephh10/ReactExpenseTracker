import { createContext, useReducer, useEffect } from "react";
import { TransactionReducer } from "./TransactionReducer";

export const TransactionContext = createContext({
  transactions: [],
  addTransaction: () => {},
  removeTransaction: () => {},
});

const localDataItem = JSON.parse(localStorage.getItem("storedTr"));

export function TransactionContextProvider({ children }) {
  const [state, dispatch] = useReducer(
    TransactionReducer,
    localDataItem
      ? { transactions: localDataItem }
      : {
          transactions: [],
        }
  );

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("storedTr"));
    dispatch({
      type: "LOAD_DATA",
      payload: localData,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("storedTr", JSON.stringify(state.transactions));
  }, [state]);

  function addTransaction(newItem) {
    let newItemDetails = { ...newItem, id: Math.random() * 1000 };
    dispatch({
      type: "ADD_TRANSACTION",
      payload: newItemDetails,
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
