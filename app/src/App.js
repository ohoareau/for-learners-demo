import TransactionList from './TransactionList';
import {useTransactionList} from "./utils";

function App() {
  const {data, loading} = useTransactionList();
  return (
    <div className="App">
      <header className="App-header">
        {!data && loading && <p>Chargement...</p>}
        {!data && !loading && <p>Aucune transaction.</p>}
        {data && <TransactionList transactions={data}/>}
      </header>
    </div>
  );
}

export default App;
