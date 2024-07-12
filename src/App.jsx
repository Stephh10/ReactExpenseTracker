import Balance from "./components/Balance";
import History from "./components/History";
import CreateTransaction from "./components/CreateTransaction";
import { TransactionContextProvider } from "./context/TransactionContext";

function App() {
  return (
    <div className="app">
      <TransactionContextProvider>
        <Balance />
        <History />
        <CreateTransaction />
      </TransactionContextProvider>
    </div>
  );
}

export default App;
