export const TransactionReducer = (state, action) => {
  if (action.type === "ADD_TRANSACTION") {
    const newState = [...state.transactions];
    newState.push(action.payload);
    return { ...state, transactions: newState };
  }
  if (action.type === "REMOVE_TRANSACTION") {
    const newState = [...state.transactions];
    const itemId = newState.findIndex((item) => item.id === action.payload);
    newState.splice(itemId, 1);

    return { ...state, transactions: newState };
  }
  return state;
};
