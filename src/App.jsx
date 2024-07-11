import Balance from "./components/Balance";
import History from "./components/History";
import CreateTransaction from "./components/CreateTransaction";

function App() {
  return (
    <div className="app">
      <Balance />
      <History />
      <CreateTransaction />
    </div>
  );
}

export default App;
